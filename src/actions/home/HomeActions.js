import Github from '../../api/github';

export function getRepos(authorName) {
  return (dispatch) => {
    return Github.getAllRepos(authorName).then(res => {
      return res.json();
    }).then(repos => {
      dispatch(reposApiSuccess(repos));
    });
  };
}

export function getUserProfile(authorName) {
  return (dispatch) => {
    return Github.getUserProfile(authorName).then(user => {
      dispatch(userProfileApiSuccess(user));
    });
  };
}

export function reposApiSuccess(repos) {

  return {type: 'GET_REPOS_SUCCESS', repos};
}

export function userProfileApiSuccess(user) {
  return {type: 'GET_USER_SUCCESS', user};
}


