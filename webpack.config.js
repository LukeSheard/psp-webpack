const PerspectivePlugin = require("@jpmorganchase/perspective/webpack-plugin");

module.exports = {
    plugins: [
        new PerspectivePlugin({ build_worker: true })
    ]
}