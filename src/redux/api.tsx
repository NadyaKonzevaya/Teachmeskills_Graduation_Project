import axios from 'axios';

const api = axios.create({
  baseURL: 'https://studapi.teachmeskills.by',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
        const response = await axios.post('/auth/jwt/refresh/', { refresh: refreshToken });
        const newToken = response.data.access;
        localStorage.setItem('accessToken', JSON.stringify(newToken));
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return await axios(originalRequest);
      } catch (e) {
        window.location.replace('/');
      }
    }
    return Promise.reject(error);
  },
);
export default api;
