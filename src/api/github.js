class Github {

  static getAllRepos(username) {
    if(username) {
      return fetch("https://api.github.com/users/"+ username +"/repos");
    }
  }
}

export default Github;
