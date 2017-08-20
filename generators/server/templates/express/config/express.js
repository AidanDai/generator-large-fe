const path = require('path')
const express = require('express')
const glob = require('glob')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require('method-override')
const nunjucks = require('nunjucks')
const proxy = require('http-proxy-middleware')

const config = require('../config')
const mws = require('../server/middlewares')

module.exports = function(app, config) {
    const env = process.env.NODE_ENV || 'development'

    app.locals.ENV = env
    app.locals.ENV_DEVELOPMENT = env === 'development'

    // Hot reload middlewares were used in firstly constant!
    if (env === 'development') {
        const mws = require('../server/middlewares')
        const webpack = require('webpack')
        const webpackMiddleware = require('webpack-dev-middleware')
        const webpackHotMiddleware = require('webpack-hot-middleware')
        const webpackConfig = require('../webpack.config')
        const compiler = webpack(webpackConfig)
        const webpackMiddlewareConfig = { noInfo: true, publicPath:'/', stats: { color: true } }

        app.use(webpackMiddleware(compiler, webpackMiddlewareConfig))
        app.use(webpackHotMiddleware(compiler))
    }

    app.use('/v1', proxy({
        target: 'https://cnodejs.org/api ',
        secure: true,
        changeOrigin: true,
        onProxyReq: function (proxyReq, req, res) {
            // console.log(proxyReq)
        }
    }))

    const viewsPath = path.join(config.root, `/server/views/${env}`)
    app.set('views', viewsPath)
    app.set('view engine', 'nunjucks')
    nunjucks.configure(viewsPath, { autoescape: true, express: app})

    // app.use(favicon(config.root + '/favicon.ico'))
    app.use(logger('dev'))
    app.use(bodyParser.json({ limit: '1mb' }))
    app.use(bodyParser.urlencoded({ extended: true, limit: '1mb'}))
    app.use(cookieParser(config.app.client_secret))
    app.use(compress())
    app.use(express.static(config.root + '/server/public'))
    app.use(methodOverride())
    app.use(mws.common)

    const controllers = glob.sync(config.root + '/server/controllers/*.js')
    controllers.forEach(function (controller) {
        require(controller)(app)
    })

    app.use(function(req, res, next) {
        const err = new Error('Not Found')
        err.status = 404
        next(err)
    })

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            console.log(err)
            res.status(err.status || 500)
            res.render('error.html', {
                message: err.message,
                error: err,
                title: 'error'
            })
        })
    }

    app.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.render('error.html', {
            message: err.message,
            error: {},
            title: 'error'
        })
    })

    return app
}
