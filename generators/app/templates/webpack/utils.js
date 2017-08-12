const path = require('path')

const utils = {}

utils.mapResolve = function mapResolve(map) {
    let entry = {}

    for (let key of Object.keys(map)) {
        entry[key] = path.resolve(map[key])
    }
    return entry
}

utils.readJSON = function readJSON(filepath) {
    let path = path.resolve(filepath)
    let json = fs.readFileSync(path)

    return JSON.parse(json)
}

module.exports = utils
