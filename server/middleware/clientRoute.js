import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Root from '../../client/components/Root/App'
import { Provider } from 'react-redux'
import React from 'react'
import configureStore from '../../client/common/store/configureStore'

const store = configureStore()

async function clientRoute (ctx, next) {
  let context = {}

  await ctx.render('index.ejs', {
    root: renderToString(
      <Provider store={store}>
        <StaticRouter
          location={ctx.url}
          context={context}
        >
          <Root />
        </StaticRouter>
      </Provider>
    ),
    state: store.getState()
  })
}

module.exports = clientRoute