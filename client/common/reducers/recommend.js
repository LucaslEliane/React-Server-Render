import { RECEIVE_RECOMMEND, FETCH_RECOMMEND } from '../actions/actions'

const recommendReducer = function(state = {}, action) {
  switch (action.type) {
    case FETCH_RECOMMEND:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default recommendReducer