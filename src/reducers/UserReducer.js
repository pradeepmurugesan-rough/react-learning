import initialState from './InitialState';

export default function userReducer(state = initialState, action) {

  switch(action.type) {
    case 'GET_USER_SUCCESS': {
      let newObj = {...state, ...action.user};
      return newObj;
    }
    default:
      return state;
  }

}
