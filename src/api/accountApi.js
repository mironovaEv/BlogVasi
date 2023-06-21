import axios from 'axios';

const instance = axios.create({
  baseURL: `https://localhost:7190/api`,
});

function Login(data) {
  console.log(data);
  return instance
    .post('/user/login', data)
    .then(async (response) => {
      if (response.status === 200) {
        const { accessToken } = response.data.accessToken;
        const { refreshToken } = response.data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return { accessToken, refreshToken };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export const accountApi = {
  Login,
};
