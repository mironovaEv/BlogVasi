import axios from 'axios';

const instance = axios.create({
  baseURL: `https://localhost:7190/api`,
});

function getPosts(number) {
  return instance
    .get(`/wall/wall?CurrentPage=${number}`)
    .then(async (response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export const wallApi = {
  getPosts,
};
