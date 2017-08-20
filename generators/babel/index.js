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
        const setting = {
            component: this.component
        }

		this.fs.copyTpl(
			this.templatePath(`generators/babel/templates/.babelrc.tpl`),
			this.destinationPath('./.babelrc'),
			setting
		)
    }
}


