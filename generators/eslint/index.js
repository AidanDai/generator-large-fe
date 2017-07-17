'use strict'
const path = require('path')
const Generator = require('yeoman-generator')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options)

    this.sourceRoot(rootPath)
  }

  writing() {
    this.fs.copy(
      this.templatePath('generators/eslint/templates/.*'),
      this.destinationPath('./')
    )
  }

  install() {
    this.npmInstall([
        'eslint',
        'eslint-config-standard', 
        'eslint-config-standard-react', 
        'eslint-plugin-standard',
        'eslint-plugin-promise', 
        'eslint-plugin-import', 
        'eslint-plugin-node', 
        'eslint-plugin-react'
    ])
  }
}