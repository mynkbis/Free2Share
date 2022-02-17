import communityReducer from './communityReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({communityReducer, userReducer})
export default rootReducer