const path = require('path')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        const install = [
            'jwt-simple',
            'http-proxy-middleware',
            'nunjucks',
            'serve-favicon',
            'superagent'
        ]
        const expressInstall = [
            'body-parser',
            'compression',
            'cookie-parser',
            'express',
            'method-override',
            'morgan',
        ]

        super(args, options)

        this.sourceRoot(rootPath)
        this.server = options.server
		this.install = install.concat(expressInstall)
		this.devInstall = []
        this.author = `${this.user.git.name()} ${this.user.git.email()}`
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
        console.log(this.install.sort())
        console.log(this.devInstall.sort())
		//this.npmInstall(this.install)
		//this.npmInstall(devInstall, options)
    }
}


