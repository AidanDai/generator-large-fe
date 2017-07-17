'use strict'
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const Generator = require('yeoman-generator')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)

        this.author = shell.exec('git config user.name', {silent: true}).stdout.replace(/\n/g, '') + ' ' + shell.exec('git config user.email', {silent: true}).stdout.replace(/\n/g, '')
    }
    
    writing() {
        // Create the pages
        let options = this.arguments.slice()
        let module = options.shift()
        let modulePath = this.destinationPath(`./src/modules/${module}`)
        let moduleStat

        if (!fs.existsSync(modulePath)) {
            console.log(`no find '${module}' module, please usage: 'yo large-fe:module ${module}' to create the module firstly`)
            return
        }

        moduleStat = fs.statSync(modulePath)
        
        if (!moduleStat.isDirectory()) {
            console.log(`no find '${module}' module, please usage: 'yo large-fe:module ${module}' to create the module firstly`)
            if (moduleStat.isFile()) {
                console.log(`but ${module} file exist, you must remove this file firstly!`)
            }
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

            this.fs.copyTpl(
                this.templatePath('generators/page/templates'),
                this.destinationPath(`./src/modules/${module}/pages/${key}`),
                setting
            )
        }
    }
}