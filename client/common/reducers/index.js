import { combineReducers } from 'redux'
import userInfo from './userInfo'
import recommend from './recommend'
import passage from './passage'
import userState from './userState'

const rootReducer = combineReducers({
  recommend,
  passage,
  userState
})

export default rootReducer