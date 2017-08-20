const fs = require('fs')
const path = require('path')
const utils = {}

/**
 * [readJSON description]
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
utils.readJSON = function readJSON(filepath) {
    let p = path.resolve(filepath)
    let json = fs.readFileSync(p)

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

utils.moduleIsExist = function moduleIsExist(modulePath, module) {
    if (!fs.existsSync(modulePath)) {
        console.log(`Not find '${module}' module.\nPlease usage:\n\t'yo large-fe:module ${module}'\nTo create '${module}' module firstly`)
        return false
    }

    let moduleStat = fs.statSync(modulePath)

    if (!moduleStat.isDirectory()) {
        console.log(`Not find '${module}' module.\nplease usage:\n\t'yo large-fe:module ${module}'\nTo create '${module}' module firstly`)
        if (moduleStat.isFile()) {
            console.log(`But ${module} file exist, you must remove that file firstly!`)
        }
        return false
    }

    return true
}

utils.viewIsExist = function viewIsExist(viewPath, module, view) {
    if (!fs.existsSync(viewPath)) {
        console.log(`Not find '${view}' view.\nPlease usage:\n\t'yo large-fe:view ${module} ${view}'\nTo create '${view}' view firstly`)
        return false
    }

    let viewStat = fs.statSync(viewPath)

    if (!viewStat.isDirectory()) {
        console.log(`Not find '${view}' view.\nplease usage:\n\t'yo large-fe:view ${module}' ${view}\nTo create '${view}' view firstly`)
        if (viewStat.isFile()) {
            console.log(`But ${view} file exist, you must remove that file firstly!`)
        }
        return false
    }

    return true
}
module.exports = utils
