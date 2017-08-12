import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import { fromJS } from 'immutable';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import combinedReducers from '../reducers'
import { getPagedata } from '../../../public/javascripts/utils'

const pageData = getPagedata()
const loggerMiddleware = createLogger()
const combined = combineReducers(combinedReducers)
const state = fromJS(pageData.state)
const store = combined(state)

function reduxStore(state = {}) {
  const store = createStore(
    combined,
    state,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}

export default reduxStore(store)
