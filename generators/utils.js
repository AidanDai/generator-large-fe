const fs = require('fs')
const path = require('path')
const utils = {}


/**
 * [readJSON description]
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
utils.readJSON = function readJSON(filepath) {
    let path = path.resolve(filepath)
    let json = fs.readFileSync(path)

    return JSON.parse(json)
}

/**
 * [writeJSON description]
 * @param  {[string]} filepath [description]
 * @param  {[object]} obj   [description]
 * @return {[type]}          [description]
 */
utils.writeJSON = function writeJSON(filepath, obj = {}) {
    let file = fs.readFileSync(filepath)
    let target = JSON.parse(file.toString() || null)
    const prettyJSON = JSON.stringify(Object.assign({}, target, obj), null, '    ')

    return fs.writeFileSync(filepath, prettyJSON)
}

/**
 * [writeJavaScript description]
 * @param  {[type]} filepath [description]
 * @param  {String} content  [description]
 * @return {[type]}          [description]
 */
utils.writeJavaScript = function writeJavaScript(filepath, obj = {}) {
    const config = require(filepath)
    const target = utils._objConcat(config, obj)
    const code = utils._createJavaScriptCode(target)

    return fs.writeFileSync(filepath, code)
}

/**
 * [_objConcat description]
 * @param  {...[type]} argus [description]
 * @return {[type]}          [description]
 */
utils._objConcat = function _objConcat(...argus) {
    const objs = argus.slice(1)  // skip default

    return Object.assign.apply(null, objs)
}

/**
 * [_createJavaScriptCode description]
 * @param  {Object} obj [description]
 * @return {[type]}     [description]
 */
utils._createJavaScriptCode = function _createJavaScriptCode(obj = {}) {
    const prettyJSON = JSON.stringify(obj, null, '    ')
    const code = `const config = ${prettyJSON}

export default config
`
    return code
}
module.exports = utils
