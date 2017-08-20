const os = require('os')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const postcssImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const defaultConfig = require('./webpack.default')
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const rootPath = path.resolve(__dirname, '../')
const outputPath = path.resolve(__dirname, '../server/public')
const srcPath = path.resolve(__dirname, '../client')

<% if (component === 'antd-mobile') { %>
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, '')
]
<% } %>


let manifestPath
let manifest

if (process.env.NODE_ENV === 'development') {
    try {
        manifestPath = path.resolve(__dirname, '../server/public/bundles/javascripts/vendor.manifest.json')
        manifest = require(manifestPath)
    } catch (e) {
        console.error(e)
        process.exit()
    }
}

const developmentConfig = {
    context: rootPath,
    output: {
        path: outputPath,
        filename: 'bundles/javascripts/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [srcPath],
                use: [
                    'react-hot-loader/webpack',
                    'happypack/loader?id=happybabel'
                ]
            },
            {
                test: /\.(css)$/,
                include: [srcPath],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        <% if (cssModules) { %>
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]-[path]-[hash:base64:5]'
                        }
                        <% } %>
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
                                px2rem({ remUnit: 75 })
                                <% } %>
                            ]
                        }
                    }
                    <% } %>
                ]
            },
            <% if (less) { %>
            {
                test: /\.(less)$/,
                include: [srcPath],
                use: [
                    'style-loader',
                    'css-loader',
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
                                })
                                <% if (flexible) { %>
                                px2rem({ remUnit: 75 })
                                <% } %>
                            ]
                        }
                    },
                    <% } %>
                    {
                        loader: 'less-loader'
                    }
                ]
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
                            name: 'images/[name].[hash:base64:8].[ext]'
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
                            name: 'stylesheets/fonts/[name].[hash:8].[ext]'
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
        new webpack.DllReferencePlugin({
            context: rootPath,
            manifest: manifest
        }),
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            debug: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity,
            name: 'bundle'
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 1000 }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}

const webpackConfig = Object.assign({}, defaultConfig, developmentConfig)

module.exports = webpackConfig
