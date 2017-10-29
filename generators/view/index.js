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
        // create pages
        let options = this.arguments.slice()
        let module = options.shift()
        let webpackConfigPath = this.destinationPath('./webpack/webpack.entry.json')
        let isExist = utils.moduleIsExist(this.destinationPath(`./client/${module}`), module)
        let configPath = path.join(rootPath, './generators/config.json')
        let config = utils.readJSON(configPath)

        if (!isExist) {
            return
        }

        for (let key of options) {
            let setting = {
                view: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
                moduleName: module,
                author: `${this.author}`,
                date: new Date(),
                flexible: config.flexible,
                redux: this.options['redux'] || false
            }

            // create views index
            this.fs.copyTpl(
                this.templatePath('generators/view/templates/view/index.js'),
                this.destinationPath(`./client/${module}/${key}.js`),
                setting
            )

            // create views components
            this.fs.copyTpl(
                this.templatePath('generators/view/templates/view/components/Page/'),
                this.destinationPath(`./client/${module}/components/${setting.view}`),
                setting
            )

            // create webpack entry map
            const entry = {}
            entry[`${module}/${key}`] = `./${module}/${key}.js`
            utils.writeJSON(webpackConfigPath, entry)

            // create soemthing about redux
            if (setting.redux) {
                const reduxHelpers = ['actions', 'constants', 'reducers', 'models', 'services', 'stores']
                reduxHelpers.map((helper) => {
                    const name = helper === 'stores' ? key : 'index'
                    this.fs.copyTpl(
                        this.templatePath(`generators/view/templates/${helper}.js`),
                        this.destinationPath(`./client/${module}/${helper}/${name}.js`),
                        setting
                    )
                })
            }
        }
    }
}
