// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import repo from './RepoReducer';
import user from './UserReducer';

const rootReducer = combineReducers({
  repos : repo,
  user,
  routing: routerReducer
});

 export default rootReducer;
