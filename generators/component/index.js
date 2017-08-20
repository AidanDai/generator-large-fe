const fs = require('fs')
const path = require('path')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)
        this.author = `${this.user.git.name()} ${this.user.git.email()}`
    }

    writing() {
        let component = this.options['component']
        let container = this.options['container']
        let options = this.arguments.slice()
        let module = 'common'
        let view
        let componentName
        let l = options.length
        let dir = `./src/components/`
        let moduleIsExist
        let viewIsExist

        if (!container) {
            component = true
        }

        switch(l) {
            case 1:
                componentName = options[0]
                dir = `./client/common/components/`
                break
            case 2:
                module = options[0]
                moduleIsExist = utils.moduleIsExist(this.destinationPath(`./client/${module}`), module)
                if (!moduleIsExist) {
                    return
                }
                componentName = options[1]
                dir = `./client/${module}/views/components/`
                break
            case 3:
                module = options[0]
                moduleIsExist = utils.moduleIsExist(this.destinationPath(`./client/${module}`), module)
                if (!moduleIsExist) {
                    return
                }
                view = options[1]
                viewIsExist = utils.viewIsExist(this.destinationPath(`./client/${module}/views/${view}`), module, view)
                if (!viewIsExist) {
                    return
                }
                componentName = options[2]
                if (component) {
                    dir = `./client/${module}/views/${view}/components/`
                } else {
                    dir = `./client/${module}/views/${view}/containers/`
                }
            default:
                componentName = options[0]
                dir = `./client/common/components/`
        }

        let setting = {
            type: component ? '' : 'container',
            componentName: `${componentName.substring(0, 1).toUpperCase()}${componentName.substring(1)}`,
            moduleName: module,
            author: `${this.author}`,
            date: new Date()
        }

        this.fs.copyTpl(
            this.templatePath('generators/component/templates'),
            this.destinationPath(`${dir}/${componentName}`),
            setting
        )
    }
}
