/**
 * Start by setting the color scheme as Light.
 *
 * @type {string}
 */
let colorScheme = 'light';

/**
 * Sets the scheme from the browser.
 *
 * @return void
 */
function retrieveSchemeFromBrowser() {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Prepares the document to detect the current dark mode configuration.
 *
 * Run this only once.
 *
 * @return void
 */
function detectDarkMode() {
    retrieveSchemeFromBrowser();

    // Detect changes to this mode by the browser and update it.
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', e => colorScheme = e.matches ? 'dark' : 'light')

    // Now, check if there is a local storage variable for dark theme.
    // If it exists, it will take precedence over any automatic preference.
    colorScheme = window.localStorage.getItem('colorScheme') ?? colorScheme;

    applyDarkMode();
}

/**
 * Toggles and overrides the color scheme preference.
 *
 * @return void
 */
function toggleDarkMode() {
    window.localStorage.setItem('colorScheme', colorScheme === 'light' ? 'light' : 'dark')
    applyDarkMode();
}

/**
 * Resets the scheme preference back to the browser.
 *
 * @return void
 */
function defaultDarkMode() {
    window.localStorage.removeItem('colorScheme')
    retrieveSchemeFromBrowser()
    applyDarkMode()
}

/**
 * Applies dark mode to the document.
 *
 * @return void
 */
function applyDarkMode() {
    let classList = document.documentElement.classList;

    // Once done, we will the add or remove the "dark" class to the document.
    if (colorScheme === 'dark') {
        classList.add('dark')
    } else {
        classList.remove('dark')
    }
}

export { detectDarkMode, toggleDarkMode, defaultDarkMode };