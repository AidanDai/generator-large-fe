const config = require('../../config')

const uFuns = {}

uFuns.setCookies = function setCookies(target, options) {
    const keys = Object.keys(options)

    keys.map((cookie) => {
        typeof target.cookie === 'function' && target.cookie(cookie, options[cookie], {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            domain: config.app.cookie_domain,
            httpOnly: true
        })
    })
}

uFuns.clearCookies = function clearCookies(target, options) {
    const keys = Object.keys(options)

    keys.map((cookie) => {
        if (typeof target.cookie === 'function') {
            if (Array.isArray(options[cookie])) {
                options[cookie].map((item) => {
                    target.clearCookie(cookie, item)
                })
            } else {
                target.clearCookie(cookie, options[cookie])
            }
        }
    })
}

module.exports = uFuns
