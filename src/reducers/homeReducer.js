import initialState from './InitialState';

export default function homeReducer(state = initialState, action) {

  switch(action.type) {
    case 'GET_REPOS_SUCCESS': {
      let newObj = {...state, repositories: action.repos};
      return newObj;
    }
    case 'GET_USER_SUCCESS': {
      let newObj = {...state, user: action.user};
      return newObj;
    }
    default:
      return state;
  }

}
