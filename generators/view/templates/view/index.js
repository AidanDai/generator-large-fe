/*
 * @file: entry for <%= view %> component of <%= moduleName %> modules, some others description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import 'react-hot-loader/patch'
import 'babel-polyfill'
<% if (flexible) { %>
import 'lib-flexible'
<% } %>

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
<% if (redux) { %>
import { Provider } from 'react-redux'

import store from './stores/<%= view %>'
<% } %>

<% if (flexible) { %>
import { FastClick } from 'fastclick'
<% } %>
import { getPagedata, getMountNode, attachFastClick } from '../common/utils/function'
import <%= view %> from './components/<%= view %>'

const pageData = getPagedata()
const mountNode = getMountNode()

<% if (flexible) { %>
attachFastClick(FastClick)
<% } %>

<% if (redux) { %>
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <<%= view %>/>
        </Provider>
    </AppContainer>,
    mountNode
)

if (module.hot) {
    module.hot.accept('./containers/<%= view %>', () => {
        // eslint-disable-line global-require
        const next<%= view %> = require('./containers/<%= view %>').default

        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <next<%= view %>/>
                </Provider>
            </AppContainer>,
            mountNode
        )
    })
}
<% } else { %>
ReactDOM.render(
    <AppContainer>
        <<%= view %>/>
    </AppContainer>,
    mountNode
)

if (module.hot) {
    module.hot.accept('./containers/<%= view %>', () => {
        // eslint-disable-line global-require
        const next<%= view %> = require('./containers/<%= view %>').default

        ReactDOM.render(
            <AppContainer>
                <next<%= view %>/>
            </AppContainer>,
            mountNode
        )
    })
}
<% } %>
