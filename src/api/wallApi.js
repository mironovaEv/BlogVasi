import { Refresh } from './accountApi';
import { instance } from '../api.config';

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

function addPost(data) {
  return instance
    .post('/wall/post/upload', data)
    .then(async (response) => {
      if (response.status === 200) {
        return { status: 200 };
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        Refresh({ accessToken, refreshToken }).then((resp) => {
          if (resp) {
            console.log('KJKJK');
            addPost(data);
          }
        });
      }
    });
}

export const wallApi = {
  getPosts,
  addPost,
};
