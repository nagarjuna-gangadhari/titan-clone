import { useAuthStore } from "../stores/auth.store";

export const authService = {
    async login(username, password) {
      const response = await axios.post('/auth/jwt/create/', { username, password });
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    
    register(data) {
        return axios.post('/signup', {
          username: data.username,
          email: data.email,
          password: data.password
        });
    },
    async refreshToken(refreshToken) {
      try {
        const response = await axios.post('/auth/jwt/refresh/', { refresh: refreshToken });
        return response.data.access;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    parseJwt(token){
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
    },

    async profile(){
      const response = await axios.get('/auth/profile/get/')
      if (response){
        return response.data
      }else{
        return null
      }
    },
    async update_profile(data){
      axios.post('/auth/profile/update', {
        'data': data
      })
      .then(function (response) {
        return response
        
      })
      .catch(function (error) {
        console.log(error);
        return error
      });
    },

    async location(){
      const response = await axios.get('/auth/location')
      if (response){
        return response
      }
    }
  
    // Add other utility functions related to authentication API calls here
  };
  