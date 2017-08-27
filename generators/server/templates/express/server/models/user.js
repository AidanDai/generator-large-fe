const Base = require('./base')

class User extends Base {

    constructor() {
        super()
    }

    userUidGet(req, uid, query = {}) {
        this.init(req)

        return () => {
            return new Promise((resolve, reject) => {
                const Api = this.Api
                const api = new Api.UserApi()

                api.userUidGet(uid, query, function(error, d, response) {
                    if (error) {
                        reject(error)
                    } else {
                        response.data = d
                        resolve(response)
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}

module.exports = new User()
