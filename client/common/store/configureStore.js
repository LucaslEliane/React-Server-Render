import { applyMiddleware, createStore, thunkMiddleware, loggerMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import promiseMiddleware from 'redux-promise'


export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      promiseMiddleware,
      logger
    )
  )

  return store
}