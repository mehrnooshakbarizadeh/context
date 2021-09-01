import counterReducer from "./counter";
import isLoggedIn from "./isLoggedIn";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  loggedIn: isLoggedIn
});

export default allReducers;