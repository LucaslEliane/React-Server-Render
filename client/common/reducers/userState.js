import { UPDATE_USER_LOGIN_STATE } from '../actions/actions'

const userStateReducer = function(state = {
    "loginState": false
  }, action) {
  switch (action.type) {
    case UPDATE_USER_LOGIN_STATE:
      return Object.assign({}, state, {
        "userID": action.payload.userID,
        "userAvatar": action.payload.userAvatar,
        "loginState": action.payload.loginState
      })
    default:
      return state
  }
}

export default userStateReducer