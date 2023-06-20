import axios from 'axios';

const instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});

function Login(data) {
  return instance
    .post('/user/login', data)
    .then(async (response) => {
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        return { token };
      }
    })
    .catch((error) => {});
}

export const accountApi = {
  Login,
};
