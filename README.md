![Jason Leung - Unsplash #cwhtQIssH9k](https://images.unsplash.com/photo-1530153872981-9a7666670466?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=400&q=80)

# Tailstart

HTML Components ready to style with Tailwind CSS

## What is this for?

If you need to create a visual style for your site, you can start with the basics elements and components as an "HTML skeleton". It incorporates a lot of examples, from simple paragraphs and code blocks, to common componentes like cards, table and pagination.

This is useful when you need a visual guidelines to implement from the very base, while leaving space to extend with new components.

## Installation

Simple call your Node.js package manager of choice, like `npm`:

    git clone https://github.com/DarkGhostHunter/Tailstart.git my-new-project
    rm my-new-project/.git
    cd my-new-project
    npm install

If you don't have Node.js, [this is a good opportunity to install it](https://nodejs.org/).

> If you're using Windows, install [Git](https://gitforwindows.org/) or [Github Desktop](https://desktop.github.com/).

## Usage

Tailstart is basically a [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)-powered server that serves static HTML files and parses PostCSS, and as you are guessing now, including the Tailwind CSS framework. It's meant to be used with [Component Extraction](https://tailwindcss.com/docs/extracting-components).

To start developing, just call `npm mix`:

    $> npm mix
    
        Laravel Mix v6.0
        ┌──────────────────────────────────────┬───────────┐
        │                                 File │ Size      │
        ├──────────────────────────────────────┼───────────┤
        │                    /public/js/app.js │ 188 bytes │
        │    /public/tailstart/js/tailstart.js │ 6.92 KiB  │
        │                   public/css/app.css │ 64.7 KiB  │
        │   public/tailstart/css/tailstart.css │ 16.9 KiB  │
        └──────────────────────────────────────┴───────────┘

This will run a [local BrowserSync server](http://localhost:3000/), with all the HTML pieces to style and their description.

![img.png](index.png)

Simply head to the `resources/css` directory and start editing each file. Almost all stylesheets have some minor guidelines you can follow along, or remove them and start from scratch.

![img_1.png](css.png)

> For further documentation on how to configure Laravel Mix, [refer to the official documentation](https://laravel-mix.com/).

## Component Extraction vs Vanilla Tailwind CSS

> TL;DR: If you need the smallest CSS output for production, Component Extraction won't be your friend. 

The advantage of using vanilla Tailwind CSS over HTML is a very small CSS final build, as it will purge unused CSS from the framework itself by reading files like PHP, HTML or JS. With the JIT engine, wasting hours configuring the variants needed (like `hover:focus:md` and so on) it's unnecessary.

The problem of this, you will need to repeat the same syntax on each HTML component every time you use. That shouldn't be a problem if you're developing a Javascript application, or a small PHP application with few components.

Component Extraction means to copy the CSS classes properties into personalized classes. For huge applications, this simplifies multiple CSS classes in HTML to just one, while leaving room for other utilities to micro-adjust. The problem is that your CSS files will add up as more classes are used. As a comparison, **Bootstrap 5 generates a minified 150 KB stylesheet**.

## Out-of-the-box experience

This package includes:

- Autoprefixing
- PostCSS Preset Environment
- PostCSS Nesting
- PostCSS Imports
- Live updates on styles. 

This will allow you to do things like this, and see changes automatically in the browser.

```postcss
@import "custom/style.css";

@layer components {
    .profile {
        @apply border-2 w-full text-yellow-800;
        
        & > .img {
            @apply rounded-t;
        }
    }
}
```

If you need more PostCSS plugins, just head out to this [PostCSS section](https://www.postcss.parts/).

## Building

Call `mix production`, and you should see the final output in your `public/css` and `public/js` folders.

If you're developing a [Laravel application](https://laravel.com/), you may want to just copy-paste the `resources/` directory into your project.

## Road to v1.0

- [x] Better toolchain for developing and compiling (Laravel Mix) (0.7)
- [x] Base - Multimedia HTML (video, audio, embed) (0.8)
- [x] Javascript - Dark Mode (0.9.0)
- [ ] Javascript - Accordion (0.9.1)
- [ ] Javascript - Dropdown (0.9.2)
- [ ] Javascript - Notification (0.9.3)
- [ ] Javascript - Modal (0.9.4)
- [ ] Javascript - Tooltip (0.9.5)
- [ ] Javascript - Popover (0.9.6)
- [ ] Javascript - Off-canvas (0.9.7)
- [ ] Javascript - Tab (0.9.8)
- [ ] Javascript tests (1.0.0)

## License

This package is open-sourced software licensed under the [MIT license](LICENSE).