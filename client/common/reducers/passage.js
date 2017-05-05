import { FETCH_PASSAGE_BY_ID, REQUEST_PASSAGE_BY_ID } from '../actions/actions'

const passageReducer = function(state = {
  "fetchingFullPassage": false
}, action) {
  switch (action.type) {
    case REQUEST_PASSAGE_BY_ID:
      return Object.assign({}, state, action.payload)
    
    case FETCH_PASSAGE_BY_ID:
      return Object.assign({}, state, {
        "fetchingFullPassage": false,
        "passage": action.payload
      })

    default:
      return state
  }
}

export default passageReducer

