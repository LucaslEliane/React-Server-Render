import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const REQUEST_RECOMMEND_PASSAGE = "REQUEST_RECOMMEND_PASSAGE"
export const FETCH_RECOMMEND_PARTITION = "FETCH_RECOMMEND_PARTITION"
export const FETCH_RECOMMEND_PASSAGE = "FETCH_RECOMMEND_PASSAGE"
export const FETCH_RECOMMEND_PASSAGE_FIRST = "FETCH_RECOMMEND_PASSAGE_FIRST"

export const FETCH_PASSAGE_BY_ID = "FETCH_PASSAGE_BY_ID"
export const REQUEST_PASSAGE_BY_ID = "REQUEST_PASSAGE_BY_ID"

export const UPDATE_USER_LOGIN_STATE = "UPDATE_USER_LOGIN_STATE"

export const fetchRecommendPassageFirst = createAction(FETCH_RECOMMEND_PASSAGE_FIRST, async userid => {
  const result = await fetch(`http://rapapi.org/mockjsdata/16883/index/recommendPassage`)
    .then(response => response.json())
  return result
})

export const requestRecommendPassage = createAction(REQUEST_RECOMMEND_PASSAGE, () => {
  return {
    fetchingPassage: true
  }
})

export const fetchRecommendPartition = createAction(FETCH_RECOMMEND_PARTITION, async userid => {
  const result = await fetch(`http://rapapi.org/mockjsdata/16883/index/recommendPartition`)
    .then(response => response.json())
  return result
})

export const fetchRecommendPassage = createAction(FETCH_RECOMMEND_PASSAGE, async userid => {
  const result = await fetch(`http://rapapi.org/mockjsdata/16883/index/recommendPassage`)
    .then(response => response.json())
  return result
})

export const requestPassageById = createAction(REQUEST_PASSAGE_BY_ID, () => {
  return {
    fetchingFullPassage: true
  }
})

export const fetchPassageById = createAction(FETCH_PASSAGE_BY_ID, async passageid => {
  const result = await fetch(`http://rapapi.org/mockjsdata/16883/passage`)
    .then(response => response.json())
  return result
})

export const updateUserLoginState = createAction(UPDATE_USER_LOGIN_STATE, state => {
  return state
})