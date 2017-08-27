const path = require('path')
const getEntry = dir => path.resolve(__dirname, dir)
const config = {
    entry: {
        javascript: [
            getEntry('../client/assets/javascripts/*.js')
        ],
        stylesheet: [
            getEntry('../client/assets/stylesheets/*.css'),
            getEntry('../client/assets/stylesheets/*.less')
        ]
    },
    output: {
        javascript: getEntry('../server/public/assets/javascripts'),
        stylesheet: getEntry('../server/public/assets/stylesheets')
    },
    clean: getEntry('../server/public/assets')
}

module.exports = config
