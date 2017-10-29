const path = require('path')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.server = options.server
        this.install = [
            'http-proxy-middleware',
            'jwt-simple',
            'nunjucks',
            'superagent'
        ]
        this.expressInstall = [
            'body-parser',
            'compression',
            'cookie-parser',
            'express',
            'method-override',
            'morgan',
            'serve-favicon'
        ]
        this.author = `${this.user.git.name()} ${this.user.git.email()}`

        this.sourceRoot(rootPath)
    }

    writing() {
		const setting = {
			author: this.author
		}

		this.fs.copyTpl(
			this.templatePath(`generators/server/templates/${this.server}`),
			this.destinationPath('./'),
			setting
		)
    }

    install() {
        let install = {
            express: this.install.concat(this.expressInstall)
        }

		// this.npmInstall(install[this.server])
    }
}


