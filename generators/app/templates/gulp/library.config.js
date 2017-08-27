const path = require('path')
const getEntry = dir => path.resolve(__dirname, dir)

const config = {
    entry: {
        library: {
            graphics: {
                static: [
                    getEntry('../client/assets/libraries/graphics/**/*.{eot,svg,ttf,woff,woff2,json}'),
                    getEntry('../client/assets/libraries/graphics/**/*.{png,jpg,gif,ico}')
                ],
                less: getEntry('../client/assets/libraries/graphics/graphics.less')
            }
        }
    },
    output: {
        library: {
            graphics: getEntry('../server/public/assets/libraries/graphics')
        }
    },
    clean: getEntry('../server/public/assets')
}

module.exports = config
