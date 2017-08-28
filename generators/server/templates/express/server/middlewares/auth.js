module.exports = function auth(req, res, next) {
    // TODO, authorizating in here
    req.Authorization = ''

    next()
}
