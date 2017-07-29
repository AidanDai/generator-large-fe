import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import combined from '../reducers'

const loggerMiddleware = createLogger()

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

export default reduxStore()
