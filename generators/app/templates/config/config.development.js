const path = require('path')

const rootPath = path.resolve(__dirname, '../')
const development = {
    root: rootPath,
    app: {
        name: 'baldur',
        host: process.env.APP_HOST || 'flashtalk.guokr.net',
        debug: true,

        // cookie
        ymir_domain: process.env.YMIR_DOMAIN || '.guokr.net',
        cookie_domain: process.env.COOKIE_DOMAIN || '.guokr.net',

        // API
        api_host: process.env.API_HOST || 'apis-ft-test.guokr.net',
        api_port: process.env.API_PORT || 80,
        api_repo: process.env.API_REPO || 'mimir',
        api_version: process.env.API_VERSION || 'v2',

        // auth
        wx_signin_url: process.env.WX_SIGNIN_URL || 'http://account-fantuan-test.guokr.net/weixin/sign_in',
        wx_mp_signin_url: process.env.WX_MP_SIGNIN_URL || 'http://account-fantuan-test.guokr.net/weixin_mp/sign_in/',

        // wx settings
        wx_appid: process.env.WEIXINMP_APPID || 'wx28ad2c1a9f684a8e',
        wx_pay_key: process.env.WEIXIN_PAY_KEY || 'TN25fEepT4hcvE5IOEs9KnHus907ZWNB',

        // secret
        client_secret: 'IMaRAY2ncfmI1Oqq'
    },
    port: process.env.PORT || 3000
}

if (development.app.debug) {
    development.app.host += ':' + development.port
}

development.app.api_base_path = development.app.api_host
    + ':' + development.app.api_port
    + '/' + development.app.api_repo
    + '/' + development.app.api_version

module.exports = development
