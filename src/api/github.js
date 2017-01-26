class Github {

  static getAllRepos(username) {
    if(username) {
      return fetch(API_ENDPOINT + "/users/" + username + "/repos");
    }
  }

  static getUserProfile(username) {
    if(username) {
      return fetch(API_ENDPOINT + "/users/" + username)
        .then((response) => {
          return response.json();
      });
    }
  }
}

export default Github;
