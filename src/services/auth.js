
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
    async user_data() {
      try {
        const response = await axios.get('/api/v1/profile/', {});
        if (response){
          return response.data;
        }
      } catch (error) {
        console.error(error);
        return null;
      }
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
      const response = await axios.get('/auth/profile')
      console.log(response)
      if (response){
        return response
      }
    },

    async location(){
      const response = await axios.get('/auth/location')
      if (response){
        return response
      }
    }
  
    // Add other utility functions related to authentication API calls here
  };
  