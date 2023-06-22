import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://localhost:7190/api',
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  return config;
});
