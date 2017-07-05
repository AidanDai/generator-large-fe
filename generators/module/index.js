const path = require('path')
const Generator = require('yeoman-generator')

const rootPath = path.resolve(__dirname, '../..')

module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options)

        this.sourceRoot(rootPath)
    }
    
    writing() {
        // Create the modules
        for (let key of this.options._) {
            this.fs.copyTpl(
                this.templatePath('generators/module/templates'),
                this.destinationPath(`./src/modules/${key}`),
            )
        }
    }
}