// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  homeReducer,
  routing: routerReducer
});

 export default rootReducer;
