const mix = require('laravel-mix');

//
// Tailstart files for internal styling.
//
mix.js('tailstart/js/tailstart.js', 'public/tailstart/js')
    .postCss('tailstart/css/tailstart.css', 'public/tailstart/css');

//
// Your application files
//
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css');

//
// Simple config that tells BrowserSync to serve static files and watch for changes.
//
// BrowserSync will automatically inject the changes styles into your browser.
//
mix.browserSync({
    watch: true,
    server: {
        baseDir: 'public',
    },
    files: ['resources/**/*.css', 'resources/**/*.js', 'public/**/*.html']
});

//
// Since you will do a lot of styling, this won't overwhelm your OS with notifications.
//
mix.disableNotifications();