require('babel-polyfill')

require("react")
require('prop-types')
require('react-addons-perf')
require("react-dom")

require("react-redux")

require("redux")
require("redux-thunk")
require('redux-logger')

require('immutable')
require('redux-immutablejs')
require('react-immutable-proptypes')

require('axios')

<% if (component === 'antd') { %>
require('antd')
<% } %>

<% if (component === 'antd-mobile') { %>
require('antd-mobile')
<% } %>

<% if (flexible) { %>
require('fastclick')
require('lib-flexible')
<% } %>
