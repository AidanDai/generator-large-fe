const path = require('path')

const rootPath = path.resolve(__dirname, '../')
const development = {
    root: rootPath,
    app: {
        name: '<%= name %>',
        host: process.env.APP_HOST || '127.0.0.1',
        api_host: process.env.API_HOST || 'https://cnodejs.org/api',
        api_secure: true,
        api_version: process.env.API_VERSION || 'v1'
    },
    port: process.env.PORT || 3000
}

development.app.address = `${development.app.host}/${development.port}`

development.app.api = `${development.app.api_host}/${development.app.api_version}`

module.exports = development
