![Jason Leung - Unsplash #cwhtQIssH9k](https://images.unsplash.com/photo-1530153872981-9a7666670466?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=400&q=80)

# Tailstart

HTML Components ready to style with Tailwind CSS

## What is this for?

If you need to create a visual style for your site, you can start with the basics that are included in this "skeleton" of HTML. It incorporates a lot of examples, from simple paragraphs and code blocks, to common componentes like cards, table and pagination.

This is useful when you need a visual guidelines to implement from the very base.

## Installation

Simple call your Node.js package manager of choice, like `npm`:

    npm install tailstart

## Usage

Tailstart is basically a Vite-powered server that serves static HTML files and parses PostCSS, and as you are guessing now, including the Tailwind CSS framework. It's meant to be used with [Component Extraction](https://tailwindcss.com/docs/extracting-components).

To start developing, just call `npm preview`:

    npm dev
    
       vite v2.3.3 dev server running at:
       
       > Local: http://localhost:3000/
       > Network: use `--host` to expose
       
       ready in 58ms.

The HTML pieces are described in the index of the [default local server](http://localhost:3000/).

![img.png](index.png)

Simply head to the `src/css` directory and start editing each file. Almost all stylesheets have some minor guidelines, so you can follow along, or remove them and start from scratch.

![img_1.png](css.png)

## Out-of-the-box experience

This package includes:

- Autoprefixing
- PostCSS Preset Environment
- PostCSS Nesting
- PostCSS Imports

This will allow you to do things like this:

```postcss
@import "custom/style.css";

@layer components {
    .profile {
        @apply border-2 w-full text-yellow-800;
    }
}
```

If you need more PostCSS plugins, just head out to this [PostCSS section](https://www.postcss.parts/).

## Building

Copy-paste your `src/css` along with `tailwind.config.js` and paste it [into your project](https://tailwindcss.com/docs/installation). I won't bother with ViteJS until is "configurable", so is expected that the builder will change soon (as long is as-fast as ViteJS).

If you need to build, use [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/), [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/), among the most used.

> [Snowpack](https://www.snowpack.dev/) [doesn't fully support PostCSS `@import`](https://github.com/snowpackjs/snowpack/discussions/988#discussioncomment-61335), use at your own risk.

## Road to v1.0

- [ ] Base - Multimedia HTML (video, audio, embed) (0.8)
- [ ] Javascript - Accordion (0.9.0)
- [ ] Javascript - Dropdown (0.9.1)
- [ ] Javascript - Notification (0.9.2)
- [ ] Javascript - Modal (0.9.3)
- [ ] Javascript - Tooltip (0.9.4)
- [ ] Javascript - Popover (0.9.5)
- [ ] Javascript - Off-canvas (0.9.6)
- [ ] Javascript - Tab (0.9.7)
- [ ] Javascript tests (1.0.0)

## License

This package is open-sourced software licensed under the [MIT license](LICENSE).