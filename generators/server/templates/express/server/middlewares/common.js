module.exports = function common(req, res, next) {
    req.FT_PROTO = 'http'
    if (req.headers && req.headers['x-forwarded-proto'] === 'https') {
        req.FT_HTTPS = true
        req.FT_PROTO = 'https'
    }

    const ua = req.headers['user-agent']

    const isWx = ua && !!ua.match(/MicroMessenger/i)
    const isMobile = !!ua.match(/iphone|ipad|ipod|android|blackberry|iembile/i)
    const isIos = !!ua.match(/iphone|ipad|ipod/i)
    const isAndroid = isMobile && !isIos
    const isWeb = !isMobile

    req.ua = ua
    req.isWx = isWx
    req.isMobile = isMobile
    req.isIos = isIos
    req.isAndroid = isAndroid
    req.isWeb = isWeb
    // req.ipAddress = ip.match(/\d+\.\d+\.\d+\.\d+/) || ''

    if (process.env.NODE_ENV === 'development') {
        // overwrite res.render
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
