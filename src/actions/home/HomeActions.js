import Github from '../../api/github';

export function getRepos(authorName) {
  return function (dispatch) {
    return Github.getAllRepos(authorName).then(function(res) {
      try {
        res.json().then( (repos) => {
          dispatch(reposApiSuccess(repos));
        });
      } catch (e) {
        // eslint-disable-next-line
        console.log('GET request failed!');
      }
    });
  };
}

export function reposApiSuccess(repos) {

  return {type: 'GET_REPOS_SUCCESS', repos};
}


