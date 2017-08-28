module.exports = function common(req, res, next) {
    req.FT_PROTO = 'http'

    if (req.headers && req.headers['x-forwarded-proto'] === 'https') {
        req.FT_HTTPS = true
        req.FT_PROTO = 'https'
    }

    // overwrite res.render in development
    if (process.env.NODE_ENV === 'development') {
        res._render = res.render

        res.render = function(tpl, context, callback) {
            const nextContext = Object.assign({}, context, {
                isPro: false,
                isDev: true
            })

            if (typeof callback === 'function') {
                res._render(tpl, nextContext, callback(err, tpl))
            }

            res._render(tpl, nextContext)
        }
    }

    next()
}
