const env = process.env.NODE_ENV || 'development'
const development = require('./gulpfile.development')
const production = require('./gulpfile.production')

const config = {
    development: development,
    production: production
}

module.exports = config[env]
