const path = require('path')

const utils = {}
const rootPath = path.join(__dirname, '../')

function _createHRMWebpackEntry(entryMap) {
    var config = {}

    Object.keys(entryMap).map((key) => {
        config[key] = [
            'webpack-hot-middleware/client',
            path.join(rootPath, './client', `./${entryMap[key]}/index.js`)
        ]
    })

    return config
}

function _createProWebpackEntry(entryMap) {
    var config = {}

    Object.keys(entryMap).map((key) => {
        config[key] = [
            path.join(rootPath, './client', `./${entryMap[key]}/index.js`)
        ]
    })

    return config
}

utils.getWebpackEntry = function getWebpackEntry(env = 'development', entryJSON) {
    var entryMap = JSON.parse(entryJSON)

    switch (env) {
        case 'development':
            return _createHRMWebpackEntry(entryMap)
        case 'production':
            return _createProWebpackEntry(entryMap)
        default:
            return _createHRMWebpackEntry(entryMap)
    }
}

module.exports = utils
