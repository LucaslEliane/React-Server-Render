import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Root from '../../client/components/Root/App'
import { Provider } from 'react-redux'
import React from 'react'
import configureStore from '../../client/common/store/configureStore'
import { fetchRecommendPassageFirst, fetchRecommendPartition } from '../../client/common/actions/actions'

const store = configureStore()

async function clientRoute (ctx, next) {
  let context = {}

  await store.dispatch(fetchRecommendPassageFirst('default'))
  await store.dispatch(fetchRecommendPartition('default'))

  await ctx.render('index', {
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
    state: store.getState(),
    title: "首页-难书"
  })
}

module.exports = clientRoute