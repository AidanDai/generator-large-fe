/*
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import 'react-hot-loader/patch'
import 'babel-polyfill'
<% if (flexible) { %>
import 'lib-flexible'
import 'fastclick'
<% } %>

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import store from '../../stores/<%= view %>'
import { getPagedata, getMountNode } from '../../../common/utils/function'

const mountNode = getMountNode()
const pageData = getPagedata()

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>

        </Provider>
    </AppContainer>,
    getMountNode()
)

if (module.hot) {
    module.hot.accept('./containers/..', () => {
        const next__ = require('./containers/..').default // eslint-disable-line global-require

        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>

                </Provider>
            </AppContainer>,
            getMountNode()
        )
    })
}
