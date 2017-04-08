import { applyMiddleware, createStore, thunkMiddleware, loggerMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'


export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk,
      logger
    )
  )

  return store
}