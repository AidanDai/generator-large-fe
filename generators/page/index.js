const fs = require('fs')
const path = require('path')
const Generator = require('yeoman-generator')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)
    }
    
    writing() {
        // Create the pages
        let options = this.options._.slice()
        let module = options.shift()
        let modulePath = this.destinationPath(`./src/modules/${module}`)
        let moduleStat = fs.statSync(modulePath)

        if (!moduleStat.isDirectory()) {
            console.log(`no find '${module}' module, please usage: 'yo large-fe:module ${module}' to create the module`)
            if (moduleStat.isFile()) {
                console.log(`but ${module} file exist, you must remove this file firstly!`)
            }
            return
        }

        for (let key of options) {
            let setting = {
                className: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
                pageName: key,
                author: `${Generator.git.name} ${Generator.git.email}`,
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