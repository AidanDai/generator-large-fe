const path = require('path')

const rootPath = path.resolve(__dirname, '../')
const production = {
    root: rootPath,
    app: {
        name: 'baldur',
        host: process.env.APP_HOST || 'flashtalk.guokr.net',
        debug: true,

        // cookie
        ymir_domain: process.env.YMIR_DOMAIN || '.guokr.net',
        cookie_domain: process.env.COOKIE_DOMAIN || '.chat-test.guokr.net',

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

if (production.app.debug) {
    production.app.host += ':' + production.port
}

production.app.api_base_path = production.app.api_host
    + ':' + production.app.api_port
    + '/' + production.app.api_repo
    + '/' + production.app.api_version

module.exports = production
