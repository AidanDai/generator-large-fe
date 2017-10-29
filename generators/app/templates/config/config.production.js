const path = require('path')

const rootPath = path.resolve(__dirname, '../')
const production = {
    root: rootPath,
    app: {
        name: '<%= name %>',
        host: process.env.APP_HOST || '127.0.0.1',
        api_host: process.env.API_HOST || 'https://cnodejs.org/api',
        api_secure: true,
        api_version: process.env.API_VERSION || 'v1',

        // cdn
        qiniu_access_key: process.env.QINIU_ACCESS_KEY,
        qiniu_secret_key: process.env.QINIU_SECRET_KEY,
        qiniu_bucket: process.env.QINIU_BUCKET
    },
    port: process.env.PORT || 3000
}

production.app.address = `${production.app.host}/${production.port}`

production.app.api = `${production.app.api_host}/${production.app.api_version}`

module.exports = production
