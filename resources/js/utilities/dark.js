export default class
{
    /**
     * Checks if the dark mode has been already listenerAdded or not.
     *
     * @type {boolean}
     */
    static #listenerAdded = false;

    /**
     * If the current color scheme is dark or not.
     *
     * @type boolean
     */
    static #isDark = false;

    /**
     * Checks if the current color scheme is dark.
     *
     * @return {boolean}
     */
    static isDark() {
        return this.#isDark
    }

    /**
     * Checks if the current color scheme is light.
     *
     * @return {boolean}
     */
    static isLight() {
        return !this.isDark()
    }

    /**
     * Prepares the document to detect the current dark mode configuration.
     *
     * This is idempotent thanks to the "listenerAdded" variable.
     *
     * @return this
     */
    static detect() {

        let preference = window.localStorage.getItem('colorScheme');

        // If there is no local preference, proceed to the the browser preference.
        if (preference) {
            this.#isDark = preference === 'dark'
        } else {
            this.#setSchemeFromBrowser();
        }

        // Detect changes to this mode by the browser and update it.
        if (! this.#listenerAdded) {
            this.#getMedia().addEventListener('change', e => {
                this.#isDark = e.matches
                this.#applyScheme();
            })

            this.#listenerAdded = true;
        }

        this.#applyScheme();

        return this;
    }

    /**
     * Returns the Media Query for color scheme.
     *
     * @return {MediaQueryList}
     */
    static #getMedia() {
        return window.matchMedia('(prefers-color-scheme: dark)');
    }

    /**
     * Sets the scheme from the browser.
     *
     * @return void
     */
    static #setSchemeFromBrowser() {
        this.#isDark = this.#getMedia().matches
    }

    /**
     * Toggles and overrides the color scheme preference.
     *
     * @return void
     */
    static toggle() {
        if (this.isLight()) {
            this.dark()
        } else {
            this.light()
        }
    }

    /**
     * Sets the scheme to dark.
     *
     * @return void
     */
    static dark() {
        window.localStorage.setItem('colorScheme', 'dark')
        this.#isDark = true;
        this.#applyScheme();
    }

    /**
     * Sets the scheme to light.
     *
     * @return void
     */
    static light() {
        window.localStorage.setItem('colorScheme', 'light')
        this.#isDark = false;
        this.#applyScheme();
    }

    /**
     * Resets the scheme preference back to the browser.
     *
     * @return void
     */
    static original() {
        window.localStorage.removeItem('colorScheme')
        this.#setSchemeFromBrowser()
        this.#applyScheme()
    }

    /**
     * Applies dark mode to the document.
     *
     * @return void
     */
    static #applyScheme() {
        // Once done, we will the add or remove the "dark" class to the document.
        if (this.isDark()) {
            window.document.documentElement.classList.add('dark')
        } else {
            window.document.documentElement.classList.remove('dark')
        }
    }
}