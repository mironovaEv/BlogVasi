import { instance } from '../api.config';

function Login(data) {
  return instance
    .post('/user/login', data)
    .then(async (response) => {
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return { accessToken, refreshToken };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function Logout() {
  return instance
    .post('/user/logout')
    .then(async (response) => {
      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return { status: 200, message: 'ok' };
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        Refresh({ accessToken, refreshToken }).then((resp) => {
          if (resp) {
            Logout();
          }
        });
      }
    });
}

export function Refresh(tokens) {
  return instance
    .post('/user/refresh', tokens)
    .then(async (response) => {
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
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
  Logout,
  Refresh,
};
