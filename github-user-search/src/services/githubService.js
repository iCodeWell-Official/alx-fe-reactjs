import axios from "axios";

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const searchGithubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  return response.data;
};
