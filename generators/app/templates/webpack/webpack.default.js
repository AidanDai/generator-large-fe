const fs = require('fs')
const path = require('path')
const utils = require('./webpack.utils')

const env = process.env.NODE_ENV || 'development'
const entryJSONPath = path.resolve(__dirname, './webpack.entry.json')
const entryJSON = fs.readFileSync(entryJSONPath)

<% if (component === 'antd') { %>
const config = {
    devtool: '#eval-source-map',
    entry: utils.getWebpackEntry(env, entryJSON),
    resolve: {
        extensions: ['.js', '.json'],
    }
}
<% } %>

<% if (component === 'antd-mobile') { %>
const config = {
    devtool: '#eval-source-map',
    entry: utils.getWebpackEntry(env, entryJSON),
    resolve: {
        extensions: ['.web.js', '.js', '.json'],
    }
}
<% } %>

module.exports = config
