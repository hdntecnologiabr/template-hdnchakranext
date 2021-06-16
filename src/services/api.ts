import axios from 'axios';
import { parseCookies } from 'nookies';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async config => {
  const { 'appname.token': token } = parseCookies();

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default api;
