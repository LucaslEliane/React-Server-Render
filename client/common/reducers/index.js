import { combineReducers } from 'redux'
import userInfo from './userInfo'
import recommend from './recommend'

const rootReducer = combineReducers({
  recommend
})

export default rootReducer