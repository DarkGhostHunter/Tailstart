const plugin = require("tailwindcss/plugin")

module.exports = {
    mode: 'jit',
    purge: {
        mode: 'all',
        content: [
            './src/**/*.html',
            './src/js/**/*.js'
        ],
    },
    theme: {
        extend: {
            /* */
        },
    },
    variants: {
        /* */
    },
    plugins: [
    ]
};