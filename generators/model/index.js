'use strict'
const path = require('path')
const shell = require('shelljs')
const Generator = require('yeoman-generator')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options)

    this.sourceRoot(rootPath)
    this.author = shell.exec('git config user.name', {silent: true}).stdout.replace(/\n/g, '') + ' ' + shell.exec('git config user.email', {silent: true}).stdout.replace(/\n/g, '')
  }

  writing() {
    const options = this.arguments.slice()
    const setting = {
        author: this.author,
        date: new Date()
    }

    for (let key of options) {
      this.fs.copyTpl(
        this.templatePath('generators/model/templates/index.js'),
        this.destinationPath(`./src/models/${key}.js`),
        setting
      )
    }
    
  }
}