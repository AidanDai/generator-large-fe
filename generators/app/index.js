const path = require('path')
const chalk = require('chalk')
const yosay = require('yosay')
const Generator = require('yeoman-generator')
const utils = require('../utils')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
	constructor(args, options) {
		super(args, options)

		this.log(yosay(
			'Welcome to the excellent ' + chalk.green('generator-large-fe') + ' generator!'
		))

		this.sourceRoot(rootPath)
		this.install = [
            'axios',
            'moment',
            'prop-types',
            'querystring',
            'react',
            'react-dom',
            'prop-types',
        ]
		this.devInstall = []
        this.author = `${this.user.git.name()} ${this.user.git.email()}`
    }

	prompting() {
		return this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Please input your application name',
				default: this.appname
			},
			{
				type: 'input',
				name: 'version',
				message: 'Please input your application version',
				default: '0.0.1'
            },
            {
				type: 'confirm',
				name: 'flexible',
				message: 'Enable lib-flexible ? (see https://github.com/amfe/lib-flexible/tree/master for more detail )',
				default: false
            },
            {
				type: 'confirm',
				name: 'cssModule',
				message: 'Enable css modules ? (see https://github.com/css-modules/css-modules for more detail)',
				default: true
            },
            {
				type: 'confirm',
				name: 'less',
				message: 'Enable less ?',
				default: true
			},
			{
				type: 'confirm',
				name: 'postcss',
				message: 'Enable postcss ?',
				default: true
			},
			{
				type: 'list',
				name: 'component',
				message: 'Which component package do you want to use ?',
				choices: ['antd', 'antd-mobile'],
				default: 'antd'
            },
            {
				type: 'confirm',
				name: 'redux',
				message: 'Enable redux ?',
				default: true
			},
            {
				type: 'list',
				name: 'server',
				message: 'Which server do you want to use ?',
				choices: ['express'],
				default: 'express'
            }
		]).then((answers) => {
			this.name = answers.name
            this.version = answers.version
            this.flexible = answers.flexible
			this.cssModule = answers.cssModule
			this.less = answers.less
			this.postcss = answers.postcss
            this.component = answers.component
            this.redux = answers.redux
            this.server = answers.server
		})
	}

	configuring() {
        if (this.flexible) {
            this.install.push('lib-flexible', 'fastclick')
        }

		if (this.component === 'antd') {
			this.install.push('antd')
		}

		if (this.component === 'antd-mobile') {
            this.install.push('antd-mobile')
            this.devInstall.push('svg-sprite-loader')
        }

        if (this.redux) {
            this.install = this.install.concat([
                'immutable',
                'react-immutable-proptypes',
                'react-redux',
                'redux',
                'redux-immutablejs',
                'redux-thunk'
            ])
        }

        // write config
        const configPath = path.join(`${this.sourceRoot(rootPath)}`, 'generators/config.json')
        const config = {
            flexible: this.flexible,
            cssModule: this.cssModule,
            component: this.component,
            redux: this.redux,
            server: this.server
        }

        utils.writeJSON(configPath, config)
	}

	writing() {
		const setting = {
			name: this.name,
			version: this.version,
            author: this.author,
            less: this.less,
            postcss: this.postcss,
            flexible: this.flexible,
            cssModule: this.cssModule,
            component: this.component
		}

		this.fs.copyTpl(
			this.templatePath('generators/app/templates/'),
			this.destinationPath('./'),
			setting
		)

		this.fs.copy(
			this.templatePath('generators/app/templates/.*'),
			this.destinationPath('./')
        )

        this.composeWith(require.resolve('../server'), {
            server: this.server
        })

        this.composeWith(require.resolve('../babel'), {
            component: this.component
        })

        // initial module
        this.composeWith(require.resolve('../module'), {
            arguments: [ 'home' ]
        })
    }

    install() {
        const devInstall = this.devInstall.concat([
            'assets-webpack-plugin',
            'autoprefixer',
            'babel-core',
            'babel-eslint',
            'babel-loader',
            'babel-plugin-import',
            'babel-plugin-react-css-modules',
            'babel-plugin-transform-runtime',
            'babel-polyfill',
            'babel-preset-env',
            'babel-preset-es2015',
            'babel-preset-react',
            'clean-webpack-plugin',
            'cross-env',
            'css-loader',
            'cssnano',
            'del',
            'eslint',
            'eslint-plugin-react',
            'extract-text-webpack-plugin',
            'file-loader',
            'gulp',
            'gulp-clean-css',
            'gulp-concat',
            'gulp-concat-css',
            'gulp-cssnano',
            'gulp-json-concat',
            'gulp-less',
            'gulp-px3rem',
            'gulp-rev',
            'gulp-rev-replace',
            'gulp-size',
            'gulp-uglify',
            'happypack',
            'image-webpack-loader',
            'less',
            'less-loader',
            'less-plugin-autoprefix',
            'nodemon',
            'postcss-import',
            'postcss-loader',
            'postcss-px2rem',
            'react-addons-perf',
            'react-hot-loader@next',
            'redux-devtools-extension',
            'shelljs',
            'style-loader',
            'svg-sprite-loader',
            'url-loader',
            'webpack',
            'webpack-dev-middleware',
            'webpack-hot-middleware'
		])
		const options = {
			'save-dev': true
        }

		this.npmInstall(this.install)
		this.npmInstall(devInstall, options)
    }

    end() {
        // initial view
        this.composeWith(require.resolve('../view'), {
            name: this.name,
            redux: this.redux,
            arguments: [ 'home', 'home' ]
        })
    }
}
