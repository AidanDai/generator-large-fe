'use strict'
const path = require('path')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options)

    this.log(yosay(
      'Welcome to the excellent ' + chalk.green('generator-large-fe') + ' generator!'
    ))

    this.sourceRoot(rootPath)
  }

  prompting() {
    return this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Please choose your application name',
        default : this.appname
      },
      {
        type: 'confirm',
        name: 'less',
        message: 'Do you want to use less?',
        default: true
      },
      {
        type: 'confirm',
        name: 'postcss',
        message: 'Enable postcss?',
        default: true
      },
      {
        type: 'list',
        name: 'component',
        message: 'Which component package do you want to use?',
        choices: ['ant-design', 'ant-design-mobile'],
        default: 'ant-design'
      }
    ]).then((answers) => {
      this.name = answers.name
      this.less = answers.less
      this.postcss = answers.postcss
      this.component = answers.component
    })
  }

  configuring() {
    let pak = this.fs.readJSON(path.resolve(__dirname, './templates/package.json'))
  }

  writing() {
    // this.fs.copy(
    //   this.templatePath('../templates'),
    //   this.destinationPath('./')
    // )
  }

  install() {
    // this.installDependencies()
  }
}
