import { FETCH_RECOMMEND_PARTITION, FETCH_RECOMMEND_PASSAGE, REQUEST_RECOMMEND_PASSAGE, FETCH_RECOMMEND_PASSAGE_FIRST } from '../actions/actions'

const recommendReducer = function(state = {
    "fetchingPassage": false
  }, action) {
  switch (action.type) {
    case FETCH_RECOMMEND_PARTITION:
      return Object.assign({}, state, action.payload)
    case FETCH_RECOMMEND_PASSAGE_FIRST:
      return Object.assign({}, state, action.payload)
    case FETCH_RECOMMEND_PASSAGE:
      return Object.assign({}, state, {
        "passage": [].concat(
          state.passage,
          action.payload.passage
        ),
        "fetchingPassage": false
      })
    case REQUEST_RECOMMEND_PASSAGE:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default recommendReducer