import axios from 'axios';

const instance = axios.create({
  baseURL: `https://localhost:7190/api`,
});

function getPost(id) {
  return instance
    .get(`/wall/post/${id}`)
    .then(async (response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export const postApi = {
  getPost,
};
