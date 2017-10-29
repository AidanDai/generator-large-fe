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
                view: key,
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
                this.templatePath('generators/view/templates/view/components/*'),
                this.destinationPath(`./client/${module}/components/`),
                setting
            )

            // create webpack entry map
            const entry = {}
            entry[`${module}/${key}`] = `./${module}/${key}.js`
            utils.writeJSON(webpackConfigPath, entry)

            // create soemthing about redux
            if (setting.redux ) {
                const reduxHelpers = ['actions', 'constants', 'reducers', 'services', 'stores']
                reduxHelpers.map((helper) => {
                    if (helper === 'stores') {
                        this.fs.copyTpl(
                            this.templatePath(`generators/view/templates/${helper}.js`),
                            this.destinationPath(`./client/${module}/${helper}/${key}.js`),
                            setting
                        )
                    }

                    this.fs.copyTpl(
                        this.templatePath(`generators/view/templates/${helper}.js`),
                        this.destinationPath(`./client/${module}/${helper}/index.js`),
                        setting
                    )
                })
            }
        }
    }
}
