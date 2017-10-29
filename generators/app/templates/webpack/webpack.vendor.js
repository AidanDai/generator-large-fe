require('babel-polyfill')

require("react")
require('prop-types')
require("react-dom")

require("react-redux")

require("redux")
require("redux-thunk")

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
