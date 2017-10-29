/*
 * @file: some description for this file
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

import store from '../../stores/<%= view %>'
<% } %>

<% if (flexible) { %>
import { FastClick } from 'fastclick'
<% } %>
import { getPagedata, getMountNode, attachFastClick } from '../../../common/utils/function'
import Page from './components/Page'

const pageData = getPagedata()
const mountNode = getMountNode()

<% if (flexible) { %>
attachFastClick(FastClick)
<% } %>

<% if (redux) { %>
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Page/>
        </Provider>
    </AppContainer>,
    mountNode
)

if (module.hot) {
    module.hot.accept('./containers/Page', () => {
        // eslint-disable-line global-require
        const nextPage = require('./containers/Page').default

        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <nextPage/>
                </Provider>
            </AppContainer>,
            mountNode
        )
    })
}
<% } else { %>
ReactDOM.render(
    <AppContainer>
        <Page/>
    </AppContainer>,
    mountNode
)

if (module.hot) {
    module.hot.accept('./containers/Page', () => {
        // eslint-disable-line global-require
        const nextPage = require('./containers/Page').default

        ReactDOM.render(
            <AppContainer>
                <nextPage/>
            </AppContainer>,
            mountNode
        )
    })
}
<% } %>
