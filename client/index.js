import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './common/store/configureStore'
import Root from './components/Root/App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import React from 'react'

const store = configureStore(window.REDUX_STATE)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Root />
    </BrowserRouter>
  </Provider>, document.getElementById('root'))