let plugins = [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-nesting"),
    require("autoprefixer")
]

module.exports = {
    plugins: plugins,
}