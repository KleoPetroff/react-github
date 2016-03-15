import axios from 'axios';

const getRepos = (username) => {
  return axios.get(`http://api.github.com/users/${username}/repos`);
};
const getUserInfo = (username) => {
  return axios.get(`http://api.github.com/users/${username}`);
};

var helpers = {
  getGithubInfo: (username) => {
    return axios
      .all([getRepos(username), getUserInfo(username)])
      .then(function (arr) {
          return {
            repos: arr[0].data,
            bio: arr[1].data
          }
        }
      );
  }
}

export default helpers;