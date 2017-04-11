import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const FETCH_RECOMMEND = "FETCH_RECOMMEND"

export const fetchRecommend = createAction(FETCH_RECOMMEND, async userid => {
  const result = await fetch(`http://rapapi.org/mockjsdata/16883/index/recommend`)
    .then(response => response.json())
    .then(json => {
      return json
    })
  return result
})