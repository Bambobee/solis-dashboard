import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  headers: {
    'content-type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    if (config.url !== '/user/login' && !config.url.includes('/user/signup')) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.resolve({ error });
  }
);
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 500) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
);
export default instance;
