import {combineReducers} from 'redux';
import userReducer from './user';
import colorReducer from './styling'

export default combineReducers({
  userReducer: userReducer,
  colorReducer: colorReducer
})
