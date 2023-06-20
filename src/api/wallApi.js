import axios from 'axios';

const instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});

function getPosts() {
  return instance
    .get('/wall/wall')
    .then(async (response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {});
}

export const wallApi = {
  getPosts,
};
