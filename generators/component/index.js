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
        let component = this.options['component']
        let container = this.options['container']
        let options = this.arguments.slice()
        let l = options.length
        let dir = `./src/components/`

        if (!container) {
            component = true
        }

        if (l === 1) {
            if (component) {
                dir = `./src/components/`
            }
            if (container) {
                dir = `./src/containers/`
            }
        }

        if (l === 2) {
            if (component) {
                dir = `./src/modules/${options[0]}/components/`
            }
            if (container) {
                dir = `./src/modules/${options[0]}/containers/`
            }
            options.shift()
        }

        let dirPath = this.destinationPath(dir)

        if (!fs.existsSync(dirPath)) {
            console.log(`no find '${module}' module, please usage: 'yo large-fe:module ${module}' to create the module firstly`)
            return
        }

        let dirStat = fs.statSync(dirPath)
        
        if (!dirStat.isDirectory()) {
            console.log(`no find '${module}' module, please usage: 'yo large-fe:module ${module}' to create the module firstly`)
            if (dirStat.isFile()) {
                console.log(`but ${module} file exist, you must remove this file firstly!`)
            }
            return
        }

        for (let key of options) {
            let setting = {
                type: component ? 'component' : 'container',
                componentName: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
                moduleName: module,
                author: `${this.author}`,
                date: new Date()
            }

            this.fs.copyTpl(
                this.templatePath('generators/component/templates'),
                this.destinationPath(`${dir}/${key}`),
                setting
            )
        }
    }
}