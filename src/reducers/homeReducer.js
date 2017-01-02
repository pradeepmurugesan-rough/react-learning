import initialState from './InitialState';

export default function homeReducer(state = initialState.repos, action) {

  switch(action.type) {
    case 'GET_REPOS_SUCCESS': {
      let newObj = {...state, repositories: action.repos};
      return newObj;
    }
    default:
      return state;
  }

}