import axios from 'axios';

export const clearLocalStorage = () => {
  localStorage.clear();
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('@AppName:token');

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default api;
