const path = require('path')
const webpack = require('webpack')

const utils = require('./utils')
const map = utils.readJSON('./map.json')

module.exports = {
	entry: utils.mapResolve(map),
	resolve: {
	  modules: [
	  	'node_modules',
	   	path.resolve(__dirname, '../node_modules')
	  ],
	  extensions: ['.web.js', '.js', '.json'],
	}
}
