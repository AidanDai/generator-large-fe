const Api = require('../apis')
const config = require('../../config')

module.exports = function getApi(authorization) {
    const defaultClient = Api.ApiClient.instance
    const OAuth2 = defaultClient.authentications['web']

    OAuth2.accessToken = authorization

    return Api
}
