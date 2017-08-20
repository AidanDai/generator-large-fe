const express = require('express')
const config = require('./config/')
const app = express()
const configExpress = require('./config/express')

configExpress(app, config)
app.listen(config.port, '0.0.0.0', function() {
  console.log('Express server listening on port ' + config.port)
})
