module.exports = function common(req, res, next) {
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
