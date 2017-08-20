const express = require('express')
const mws = require('../middlewares')

const router = express.Router()

router.get('/', function (req, res, next) {
    res.render('index.html', {
        title: 'Hello! Generator Large FE!'
    })
})

module.exports = function(app) {
    app.use('/', router)
}
