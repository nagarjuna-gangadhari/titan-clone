import { defineStore } from 'pinia';
import { router } from '@/routers';
import { authService } from '@/services'
import { useToast } from "vue-toastification";
const toast = useToast();

export const useAuthStore = defineStore('AUTH', {
  state: () => ({
    profile: {"username":"xxxxx","email":"xxxxx","first_name":"xxxxx","last_name":"xxxxx","date_joined":"2000-01-01","terms":true,"reference":"xxxxxxx","dob":"2000-01-01","mobile":"xxxxxx","gender":{"id":100,"name":"Others"},"genders":[{"id":1,"name":"Male"},{"id":2,"name":"Female"},{"id":100,"name":"Others"}],"country":{"id":1,"name":"India"},"state":{"id":1,"name":"Karnataka"},"city":{"id":1,"name":"Bengaluru"},"pincode":'xxxxx',"professions":[{"id":1,"name":"Self Employed"},{"id":2,"name":"Home Maker"},{"id":3,"name":"Agriculture"},{"id":4,"name":"Medical"},{"id":5,"name":"Law"},{"id":6,"name":"Engineering"},{"id":7,"name":"Service"},{"id":8,"name":"Psu"},{"id":9,"name":"Student"},{"id":10,"name":"Teaching"},{"id":100,"name":"Others"}],"profession":{"id":6,"name":"Engineering"},"educations":[{"id":1,"name":"Phd"},{"id":2,"name":"Post Graduation"},{"id":3,"name":"Under Graduation"},{"id":4,"name":"Diploma"},{"id":5,"name":"High School"},{"id":100,"name":"Others"}],"education":{"id":2,"name":"Post Graduation"},"linkedIn":"linked.com/xyz","step":1,"groups":[],"roles":[{"id":1,"name":"TEACHER","opted":true,"activate":false,"status":"Opted","notes":"","history":[],"description":null},{"id":2,"name":"ASSITANT","opted":false,"activate":false,"status":false,"notes":"","history":[]},{"id":3,"name":"ASSITANT","opted":false,"activate":false,"status":false,"notes":"","history":[]}],"preferences":[{"id":1,"type":"Email","status":false},{"id":2,"type":"Sms","status":false},{"id":3,"type":"Watsapp","status":false}],"countries":[{"id":1,"name":"India"}],"states":[{"id":1,"name":"Karnataka"}],"cities":[{"id":1,"name":"Bengaluru"}]},
    token: '',
    access: '',
    refresh: '',
    returnUrl: '',
    locations: [{id:1, country:'India', state:'Maharasta', city:'Mumbai'}],
    username: '',
    email: '',
    mobile: '',
  }),

  getters: {
    user() {
      let call_profile = false;

      if (!this.access && localStorage.getItem('access') && localStorage.getItem('refresh')) {
        console.log('local token...');
        this.refresh = localStorage.getItem('refresh');
        this.access = localStorage.getItem('access');
        call_profile = true;
      }
      if (this.access) {
        const access_data = authService.parseJwt(this.access);
        if (access_data) {
          console.log(access_data.exp)
          if (+new Date <= access_data.exp) {
            console.log('token expaired');
            this.refresh();
            return null;
          }
          if (call_profile) {
            this.update_user();
          }
        }else{
          this.refresh()
        }
        return this.profile;
      }
      this.logout()
      return null;
    },
  },

  actions: {
    async login(username, password) {
      const response = await authService.login(username, password);
      if (response) {
        toast.success('login...', )
        this.access = response.access;
        this.refresh = response.refresh;
        this.token = response;
        localStorage.setItem('access', response.access);
        localStorage.setItem('refresh', response.refresh);
        document.cookie = response.refresh
        // localStorage.setItem('token', JSON.stringify(response));
        this.update_user()
        router.push(this.returnUrl || '/');
      }
      return response;
    },
    logout() {
      console.log('loged out...')
      this.token = null;
      this.access = null;
      this.refresh = null;
      this.profile = {};
      // localStorage.removeItem('token');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.returnUrl = '/'
      router.push('/login');
    },
    async refreshToken() {
      if (this.refresh) {
        const newAccess = await authService.refreshToken(this.refresh);
        if (newAccess) {
          this.access = newAccess;
          localStorage.setItem('access', newAccess);
          localStorage.setItem('refresh', this.refresh);
          this.update_user()
        } else {
          this.logout();
        }
      } else {
        this.logout();
      }


    },
    async update_user() {
      const response = await authService.profile()
      if (response) {
        this.profile= response.data
        this.username = response.data.username
        this.email = response.data.email
        this.mobile = response.data.mobile
        this.location()
      }else {
        this.refreshToken();
      }
    },


    async location(){
      const p = await authService.location()
        if (p){
          this.locations = p.data
          //--------------------------------------------
          this.profile.countries = this.locations.map((location) => {
            return { id: location.id, name: location.country };
          });
          this.profile.country = this.profile.countries.filter((country)=>country.name==this.profile.country)[0]
          //-------------------------------------------------------
          this.profile.states = this.locations.map((location) => {
            return { id: location.id, name: location.state };
          });
          this.profile.state = this.profile.states.filter((state)=>state.name==this.profile.state)[0]
          //-----------------------------------------------------
          this.profile.cities = this.locations.map((location) => {
            return { id: location.id, name: location.city };
          });
          this.profile.city = this.profile.cities.filter((city)=>city.name==this.profile.city)[0]
          //-------------------------------------------------

          return this.locations
        }
      
      
    }
    

    // Other actions remain unchanged
  },
});
