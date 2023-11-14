import { defineStore } from 'pinia';
import { router } from '@/routers';
import { authService } from '@/services'
import { useToast } from "vue-toastification";
const toast = useToast();

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
      let call_user_data = false;

      if (!this.access && localStorage.getItem('access') && localStorage.getItem('refresh')) {
        console.log('local token...');
        this.refresh = localStorage.getItem('refresh');
        this.access = localStorage.getItem('access');
        call_user_data = true;
      }
      if (this.access) {
        const access_data = authService.parseJwt(this.access);
        if (access_data) {
          if (+new Date <= access_data.exp){
            console.log('token expaired');
            this.logout();
            return null;
          }
          if(call_user_data){
            this.update_user();
          }
          return this.user_data;
        }
      }
      this.logout()
      return null;
    },
  },

  actions: {
    async login(username, password) {
      const response = await authService.login(username, password);
      if (response) {
        toast('login success...')
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
      this.user_data.username = k.username
      this.user_data.email = k.email
      this.user_data.roles = k.groups
    }

    // Other actions remain unchanged
  },
});
