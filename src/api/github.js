class Github {

  static getAllRepos(username) {
    if(username) {
      return fetch("https://api.github.com/users/"+ username +"/repos");
    }
  }

  static getUserProfile(username) {
    if(username) {
      return fetch("https://api.github.com/users/" + username)
        .then((response) => {
          return response.json();
      });
    }
  }
}

export default Github;
