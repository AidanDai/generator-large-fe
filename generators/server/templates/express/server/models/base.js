const getApi = require('../utils/getApi')

class Base {

    init(req) {
        this.Api = getApi(req.Authorization, req.FT_PROTO)
    }

}

module.exports = Base
