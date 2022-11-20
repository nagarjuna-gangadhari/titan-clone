import axios from 'axios'
import { AUTH } from '@/stores'

const token = JSON.parse(localStorage.getItem('token'))
const AUTH_TOKEN = token ? `Bearer ${token.access}` : ''

window.axios = axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Do something before request is sent
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
  

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { user } = AUTH()
    const auth = AUTH()

    if ([401, 403].includes(error.response.status) && user.token) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      // auth.logout();
          
    }

  return Promise.reject(error);
});