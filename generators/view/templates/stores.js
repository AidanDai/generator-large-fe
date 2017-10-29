/*
 * @file: srtoe for <%= view %> component of <%= moduleName %> modules; some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable'
import combined from '../reducers'

function reduxStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combined,
        initialState,
        composeEnhancers(applyMiddleware(
            thunkMiddleware
        ))
    )
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            // We need to require for hot reloading to work properly.
            const nextCombined = require('../reducers').default  // eslint-disable-line global-require
            store.replaceReducer(nextCombined)
        })
    }
    return store
}

const initialState = fromJS({})
const store = reduxStore(initialState)

export default store
