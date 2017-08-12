'use strict'
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)

        this.author = shell.exec('git config user.name', {silent: true}).stdout.replace(/\n/g, '') + ' ' + shell.exec('git config user.email', {silent: true}).stdout.replace(/\n/g, '')
    }

    writing() {
        // create pages
        let options = this.arguments.slice()
        let module = options.shift()
        let webpackConfigPath = this.destinationPath('./webpack/map.json')
        let isExist = this._moduleIsExist(module)

        if (!isExist) {
            return
        }

        for (let key of options) {
            let setting = {
                className: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
                pageName: key,
                moduleName: module,
                author: `${this.author}`,
                date: new Date()
            }

            // create pages
            this.fs.copyTpl(
                this.templatePath('generators/page/templates'),
                this.destinationPath(`./src/modules/${module}/pages/${key}`),
                setting
            )

            // create webpack entry map
            const entry = {}
            entry[`${module}/${key}`] = `../src/modules/${module}/pages/${key}`
            utils.writeJSON(webpackConfigPath, entry)
        }
    }

    _moduleIsExist(module) {
        let modulePagePath = this.destinationPath(`./src/modules/${module}`)
        let modulePageStat

        if (!fs.existsSync(modulePagePath)) {
            console.log(`Not find '${module}' module.\nPlease usage:\n\t'yo large-fe:module ${module}'\nTo create the module firstly`)
            return false
        }

        modulePageStat = fs.statSync(modulePagePath)

        if (!modulePageStat.isDirectory()) {
            console.log(`Not find '${module}' module.\nplease usage:\n\t'yo large-fe:module ${module}'\nTo create the module firstly`)
            if (modulePageStat.isFile()) {
                console.log(`But ${module} file exist, you must remove that file firstly!`)
            }
            return false
        }

        return true
    }
}
