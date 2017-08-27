const Api = require('../apis')
const config = require('../../config')

module.exports = function getApi(authorization, protocol = 'http') {
    const defaultClient = Api.ApiClient.instance

    defaultClient.defaultHeaders['node-forwarded-proto'] = protocol
    defaultClient.basePath = 'http://' + config.app.api_base_path

    const OAuth2 = defaultClient.authentications['web']

    OAuth2.accessToken = authorization

    return Api
}
