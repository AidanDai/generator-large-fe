const path = require('path')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)
        this.component = options.component
    }

    writing() {
        let configPath = path.join(rootPath, './generators/config.json')
        let config = utils.readJSON(configPath)
        const setting = {
            component: this.component,
        }

        if (config.cssModule) {
            this.fs.copyTpl(
                this.templatePath(`generators/babel/templates/.babelrc.cssModule.ejs`),
                this.destinationPath('./.babelrc'),
                setting
            )
            return
        }

        this.fs.copyTpl(
            this.templatePath(`generators/babel/templates/.babelrc.ejs`),
            this.destinationPath('./.babelrc'),
            setting
        )

    }
}


