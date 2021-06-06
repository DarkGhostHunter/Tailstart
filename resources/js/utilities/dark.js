class DarkMode
{
    /**
     * Setting the color scheme as Light
     *
     * @type {string}
     */
    static #scheme = 'light';

    /**
     * Prepares the document to detect the current dark mode configuration.
     *
     * Run this only once.
     *
     * @return void
     */
    static detectDarkMode() {
        this.#retrieveSchemeFromBrowser();

        // Detect changes to this mode by the browser and update it.
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => this.#scheme = e.matches ? 'dark' : 'light')

        // Now, check if there is a local storage variable for dark theme.
        // If it exists, it will take precedence over any automatic preference.
        this.#scheme = window.localStorage.getItem('colorScheme') ?? this.#scheme;

        this.#applyDarkMode();
    }

    /**
     * Sets the scheme from the browser.
     *
     * @return void
     */
    static #retrieveSchemeFromBrowser() {
        this.#scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    /**
     * Toggles and overrides the color scheme preference.
     *
     * @return void
     */
    static toggleDarkMode() {
        this.#scheme = this.scheme === 'light' ? 'dark' : 'light'
        window.localStorage.setItem('colorScheme', this.#scheme)
        this.#applyDarkMode();
    }

    /**
     * Resets the scheme preference back to the browser.
     *
     * @return void
     */
    static defaultDarkMode() {
        window.localStorage.removeItem('colorScheme')
        this.#retrieveSchemeFromBrowser()
        this.#applyDarkMode()
    }

    /**
     * Applies dark mode to the document.
     *
     * @return void
     */
    static #applyDarkMode() {
        let classList = document.documentElement.classList;

        // Once done, we will the add or remove the "dark" class to the document.
        if (this.#scheme === 'dark') {
            classList.add('dark')
        } else {
            classList.remove('dark')
        }
    }
}