import repositories from './github_mock_data';

class GithubMock {

  static getAllRepos(username) {
    if(username) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Object.assign([], repositories));
        }, 1000);
      });
    }

  }
}

export default GithubMock;
