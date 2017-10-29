const fs = require('fs')
const path = require('path')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')
const toFirstUpperCase = (string) => {
    return `${string.substring(0, 1).toUpperCase()}${string.substring(1)}`
}

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
        let componentName
        let componentType = 'containers'
        let l = options.length
        let dir = `./common/components/`
        let moduleIsExist

        if (!container) {
            component = true
            componentType = 'components'
        }

        switch(l) {
            case 1:
                componentName = toFirstUpperCase(options[0])
                dir = `./client/common/components/`
                break
            case 2:
                module = options[0]
                moduleIsExist = utils.moduleIsExist(this.destinationPath(`./client/${module}`), module)
                if (!moduleIsExist) {
                    return
                }
                componentName = toFirstUpperCase(options[1])
                dir = `./client/${module}/${componentType}/`
                break
            default:
                componentName = toFirstUpperCase(options[0])
                dir = `./client/common/components/`
        }

        let setting = {
            type: component ? '' : 'container',
            componentName: componentName,
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
