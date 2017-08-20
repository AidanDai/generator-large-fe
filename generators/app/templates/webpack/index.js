const env = process.env.NODE_ENV || 'development'
const development = require('./webpack.development')
const production = require('./webpack.production')

const config = {
    development: development,
    production: production
}

module.exports = config[env]
