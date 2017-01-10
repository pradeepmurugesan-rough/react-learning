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

export function reposApiSuccess(repos) {

  return {type: 'GET_REPOS_SUCCESS', repos};
}


