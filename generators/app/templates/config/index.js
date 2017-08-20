const development = require('./config.development')
const production = require('./config.production')

const env = process.env.NODE_ENV || 'development'
const config = {
    development: development,
    production: production
}

module.exports = config[env]
