const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const dllSrc = path.resolve(__dirname, '../server/public/bundles')
const vendorEntry = path.resolve(__dirname, './webpack.vendor.js')
const outputPath = path.resolve(__dirname, '../server/public')

module.exports = {
    entry: {
        vendor: [vendorEntry]
    },
    output: {
        path: path.join(dllSrc, './javascripts'),
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new CleanWebpackPlugin([ 'bundles' ], {
            root: outputPath
        }),
        new webpack.DllPlugin({
            path: path.join(dllSrc, './javascripts', 'vendor.manifest.json'),
            name: '[name]_[hash]'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
