export default function homeReducer(state = [], action) {

  switch(action.type) {
    case 'GET_REPOS_SUCCESS': {
      let newObj = [...state, ...action.repos];
      return newObj;
    }
    default:
      return state;
  }

}
