class Modules extends Generator.base {
    constructor(args, options) {
        super(args, options)

        this.argument('name', {type: 'string', required: true})
        console.log(this.options.module)
    }
    
    writing() {
        // Create the module
        // this.fs.copyTpl(
        //     this.templatePath(`${this.generatorVersion}/components/${this.componentTemplateName}`),
        //     this.destinationPath(settings.component.path + settings.component.fileName),
        //     settings
        // );
    }
    

}