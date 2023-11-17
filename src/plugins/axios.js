import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store';


window.axios = axios
axios.defaults.baseURL = 'http://' + import.meta.env.VITE_API_URL
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


// Do something before request is sent
axios.interceptors.request.use((config) => {
  const authstore = useAuthStore();
  config.headers.Authorization = `Bearer ${authstore.access}`;
  config.headers.Accept = "application/json";
  return config
}, function (error) {
  // Do something with request error
  console.log(error)
  return Promise.reject(error);
})


axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { user, refreshToken } = useAuthStore();

    if ([401, 403].includes(error.response.status) && user) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      // auth.logout();
      console.log('------------calling-------refresh')
      refreshToken()
    }

  return Promise.reject(error);
});


let b64DecodeUnicode = str =>
  decodeURIComponent(
    Array.prototype.map.call(atob(str), c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))

let parseJwt = token =>
  JSON.parse(
    b64DecodeUnicode(
      token.split('.')[1].replace('-', '+').replace('_', '/')
    )
  )