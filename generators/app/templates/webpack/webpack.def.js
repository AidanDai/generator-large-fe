const path = require('path')
const webpack = require('webpack')

const getPath = (str = '') => {
	return path.resolve(__dirname, `../src/pages/${str}`)
}

module.exports = {
	entry: { // 
		
	},
	resolve: {
	  modules: [
	  	'node_modules',
	   	path.resolve(__dirname, '../node_modules')
	  ],
	  extensions: ['.web.js', '.js', '.json'],
	}
}