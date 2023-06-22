import { instance } from '../api.config';

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
