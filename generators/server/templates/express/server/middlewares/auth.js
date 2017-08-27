const jwt = require('jwt-simple')
const config = require('../../config')
const user = require('../models/user')
const uFuns = require('../utils/function')

module.exports = function auth(req, res, next) {
    const loginUrl = `/login?next=${req.originalUrl}`
    const accessToken = req.cookies.access_token
    const uid = req.cookies.uid
    const me = req.signedCookies.me

    // TODO: can happen CSRF, should check accecctToken, me, uid
    if (accessToken && me && uid) {
        req.me = JSON.parse(me)
        req.uid = uid
        return next()
    }
    if (!req.cookies.access_token) {
        return res.redirect(loginUrl)
    }
    req.Authorization = accessToken

    const decoded = jwt.decode(accessToken, config.app.client_secret) || {}
    const p = user.userUidGet(req, decoded.uid)

    p().then((response) => {
        switch (response.statusCode) {
            case 200:
            case 201:
                if (response.data) {
                    req.me = response.data
                    req.uid = response.data.uid

                    uFuns.setCookies(res, {
                        access_token: accessToken,
                        me: JSON.stringify(req.me),
                        uid: req.uid
                    })
                    return next()
                }

                return res.redirect(loginUrl)
            case 401:
            case 403:
                return res.redirect(loginUrl)
            default:
                return next({
                    status: 500,
                    error: 'no me'
                })
        }
    }, (error) => {
        console.error(error)
        return next({
            status: error.status,
            error: error.error
        })
    }).catch((error) => {
        console.error(error)
    })
}
