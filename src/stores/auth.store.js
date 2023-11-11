import { defineStore } from 'pinia';
import { router } from '@/routers';
import { authService } from '@/services'

export const useAuthStore = defineStore('AUTH', {
  state: () => ({
    user_data: {
      username: 'XXXXXX',
      email: 'XXXXXX',
      full_name: 'XXXXXX',
      roles: [],
    },
    token: '',
    access: '',
    refresh: '',
    returnUrl: '',
  }),

  getters: {
    user(){
      let access_ = this.access || null;
      let call_user_data = null;

      if (!access_ && localStorage.getItem('token')) {
        console.log('fetching from local')
        try {
          const local_token = JSON.parse(localStorage.getItem('token'));
          this.refresh = local_token.refresh
          access_ = local_token.access || null;
          call_user_data = true;

        } catch (err) {
          this.logout()
          return null;
        }
      }

      if (access_) {
        const access_data = authService.parseJwt(access_);
        if (access_data) {
          this.access = access_
          if (+new Date <= access_data.exp){
            console.log('token expaired')
            this.logout()
            return null
          }
          if(call_user_data){
            this.update_user()
          }
          
          return this.user_data;
        }
      }

      return null;
    },
  },

  actions: {
    async login(username, password) {
      const response = await authService.login(username, password);
      console.log(response)
      if (response) {
        this.access = response.access;
        this.refresh = response.refresh;
        this.token = response;
        localStorage.setItem('access', response.access);
        localStorage.setItem('refresh', response.refresh);
        localStorage.setItem('token', JSON.stringify(response));
        this.update_user()
        router.push(this.returnUrl || '/');
      }
      return response;
    },
    logout() {
      console.log('user logged out')
      this.token=null;
      this.access=null;
      this.refresh=null;
      localStorage.removeItem('token');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.returnUrl = '/'
      router.push('/login');
    },
    async refreshToken() {
      const newAccess = await authService.refreshToken(this.refresh);
      if (newAccess) {
        this.access = newAccess;
        localStorage.setItem('access', newAccess);
      } else {
        this.logout();
      }
    },
    async update_user(){
      const k = await authService.user_data()
      console.log(k)
      this.user_data.username = k.username
      this.user_data.email = k.email
      this.user_data.roles = k.groups
    }

    // Other actions remain unchanged
  },
});
