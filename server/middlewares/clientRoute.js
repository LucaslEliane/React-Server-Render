import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Root from '../../client/components/Root/App'
import { Provider } from 'react-redux'
import React from 'react'
import store from './getStore'
import { 
  fetchRecommendPassageFirst, 
  fetchRecommendPartition,
  requestPassageById,
  fetchPassageById
} from '../../client/common/actions/actions'

async function clientRoute (ctx, next) {
  let context = {},
      urlRegExp = /^\/(passage|api)?\//,
      urlArr = ctx.url.match(urlRegExp),
      title
  switch ( urlArr ? urlArr[1] : "index") {
    case "index":
      title = "首页-难书"
      await store.dispatch(fetchRecommendPassageFirst('default'))
      await store.dispatch(fetchRecommendPartition('default'))
      break;
    case "passage":
      title = "难书-说出你的故事"
      await store.dispatch(fetchPassageById())
      break;
    case "api":
      await next()
      return;
    default:
      break;
  }

  console.log(store.getState())

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
    title: title
  })
}

module.exports = clientRoute