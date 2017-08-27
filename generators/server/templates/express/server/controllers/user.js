const querystring = require('querystring')
const express = require('express')
const config = require('../../config')

const router = express.Router()

router.get('/login', function(req, res) {
    const proto = req.FT_PROTO || 'http'
    const nextUrl = req.query.next || ''
    let wxLoginUrl = config.app.wx_signin_url + '?' + querystring.stringify({
        success: proto + '://' + config.app.host + nextUrl
    })

    if (req.isMobile) {
        wxLoginUrl = config.app.wx_mp_signin_url + '?' + querystring.stringify({
            success: proto + '://' + config.app.host + nextUrl
        })
    }

    return res.redirect(wxLoginUrl)
})

module.exports = function(app) {
    app.use('/', router)
}
