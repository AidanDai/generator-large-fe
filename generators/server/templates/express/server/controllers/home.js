const express = require('express')
const mws = require('../middlewares')

const router = express.Router()

router.get('/', mws.auth, function(req, res) {
    res.render('home/home.html', {
        title: 'generator-large-fe - this is a powerful generator for Front end engineer or Full Stack Developer of Guokr',
        pageData: JSON.stringify({})
    })
})

module.exports = function(app) {
    app.use('/', router)
}
