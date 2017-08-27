/*
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fromJS } from 'immutable'
import combined from '../reducers/detail'

function reduxStore(initialState) {
    const loggerMiddleware = createLogger()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combined,
        initialState,
        composeEnhancers(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/<%= view %>', () => {
            // We need to require for hot reloading to work properly.
            const nextCombined = require('../reducers/<%= view %>').default  // eslint-disable-line global-require
            store.replaceReducer(nextCombined)
        })
    }
    return store
}

const initialState = fromJS({})
const store = reduxStore(initialState)

export default store
