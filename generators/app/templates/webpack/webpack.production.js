const os = require('os')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const postcssImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const defaultConfig = require('./webpack.default')
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AssetsWebpackPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnano = require('cssnano')

const rootPath = path.resolve(__dirname, '../')
const outputPath = path.resolve(__dirname, '../server/public')
const srcPath = path.resolve(__dirname, '../client')
<% if (component === 'antd-mobile') { %>
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, '')
]
<% } %>
const extractCSS = new ExtractTextPlugin({
    allChunks: true,
    filename: 'bundles/stylesheets/[name].[hash:5].css'
})
const extractLESS = new ExtractTextPlugin({
    allChunks: true,
    filename: 'bundles/stylesheets/[name].[hash:5].css'
})

const productionConfig = {
    context: rootPath,
    output: {
        path: outputPath,
        filename: 'bundles/javascripts/[name].[hash:5].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [srcPath],
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                include: [srcPath],
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                <% if (cssModules) { %>
                                modules: true,
                                localIdentName: '[name]-[hash:base64:5]'
                                <% } %>
                            }
                        },
                        <% if (postcss) { %>
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    postcssImport(),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 3 versions',
                                            'Firefox ESR',
                                            'not ie < 9' // React doesn't support IE8 anyway
                                        ]
                                    }),
                                    <% if (flexible) { %>
                                    px2rem({ remUnit: 75 }),
                                    <% } %>
                                    cssnano()
                                ]
                            }
                        }
                        <% } %>
                    ]
                })
            },
            <% if (less) { %>
            {
                test: /\.(less)$/,
                include: [srcPath],
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        <% if (postcss) { %>
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    postcssImport(),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 3 versions',
                                            'Firefox ESR',
                                            'not ie < 9' // React doesn't support IE8 anyway
                                        ]
                                    }),
                                    <% if (flexible) { %>
                                    px2rem({ remUnit: 75 }),
                                    <% } %>
                                    cssnano()
                                ]
                            }
                        },
                        <% } %>
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            <% } %>
            {
                test: /\.(jpe?g|png|gif)$/,
                include: [srcPath],
                use: [
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            name: 'images/[name].[hash:base64:5].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                include: [srcPath],
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'stylesheets/fonts/[name].[hash:5].[ext]'
                        }
                    }
                ]
            },
            <% if (component === 'antd-mobile') { %>
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite',
                include: svgDirs
            }
            <% } %>
        ],
    },
    plugins: [
        new CleanWebpackPlugin([ 'assets', 'bundles', './*.*' ], {
            root: outputPath
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity,
            name: 'bundle'
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 1000 }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        new AssetsWebpackPlugin({
            prettyPrint: true,
            includeManifest: 'manifest',
            filename: 'assets.json',
            path: outputPath
        }),
        extractCSS,
        extractLESS
    ],
    devtool: false,
    stats: {
        assets: true,
        assetsSort: 'size',
        cached: true,
        cachedAssets: true,
        children: false,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        colors: true,
        depth: false,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        hash: true,
        modules: false,
        performance: true,
        providedExports: false,
        publicPath: true,
        reasons: false,
        source: false,
        timings: true,
        usedExports: false,
        version: true,
        warnings: true
    }
}

const webpackConfig = Object.assign({}, defaultConfig, productionConfig)

module.exports = webpackConfig
