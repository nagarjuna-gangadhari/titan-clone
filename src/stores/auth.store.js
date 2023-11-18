import { defineStore } from 'pinia';
import { router } from '@/routers';
import { authService } from '@/services'
import { useToast } from "vue-toastification";
const toast = useToast();

export const useAuthStore = defineStore('AUTH', {
  state: () => ({
    profile: {
      gender: { id: 1, name: 'Male' },
      genders: [{id:1, name:'Male'}],
      firstName: "XXXXXXXX",
      lastName: "YYYYYYYYY",
      mobile: "00000000000",
      country: { id: 1, name: 'India' },
      state: { id: 1, name: 'Karnataka' },
      city: { id: 1, name: 'Bengaaluru' },
      dob: "2000-01-01",
      termOfService: false,
      pinCode: "123456",
      email: 'xyz@xyz.com',
      profession: { id: 1, name: 'Self Employed' },
      professions: [{ id: 1, name: 'Self Employed' }],
      education: { id: 1, name: 'PHD' },
      linkedIn: 'https://in.linkedin.com/xyz',
      about: 'I am .....',
      preferences: [
        {id:1, name: 'Get Mails', status:true},
        {id:2, name: 'Get Messages', status:true},
        {id:3, name: 'Watsapp', status:true},
        {id:4, name: 'Calls', status:true},
      ],
      roles: [
        {
          id: 1, name: 'Teacher', opted: true, status: { id: 1, name: 'Approved' },
          history: [
            { id: 1, name: 'Role Approved', date: '12-12-2009' },
            { id: 2, name: 'Meeting', date: '11-12-2009' },
            { id: 3, name: 'Role Opted', date: '01-12-2009' },
          ]
        },
        {
          id: 2, name: 'CD', opted: true, status: { id: 2, name: 'Pending' },
          history: [
            { id: 1, name: 'Role Approved', date: '12-12-2009' },
            { id: 2, name: 'Meeting', date: '11-12-2009' },
            { id: 3, name: 'Role Opted', date: '01-12-2009' },
          ]
        },
        {
          id: 3, name: 'FT', opted: true, status: { id: 3, name: 'Approved' },
          history: [
            { id: 1, name: 'Role Approved', date: '12-12-2009' },
            { id: 2, name: 'Meeting', date: '11-12-2009' },
            { id: 3, name: 'Role Opted', date: '01-12-2009' },
          ]
        },
        {
          id: 4, name: 'Others', opted: false, status: { id: 4, name: 'Approved' },
          history: [
            { id: 1, name: 'Role Approved', date: '12-12-2009' },
            { id: 2, name: 'Meeting', date: '11-12-2009' },
            { id: 3, name: 'Role Opted', date: '01-12-2009' },
          ]
        }
      ]
    },
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
            console.log('updating user')
            this.update_user();
          }
        }else{
          this.refresh()
        }
        return this.profile;
      }
      console.log('-----1-----')
      this.logout()
      return null;
    },
  },

  actions: {
    async login(username, password) {
      const response = await authService.login(username, password);
      if (response) {
        toast.success('login success...', )
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
      console.log('calling log out')
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
          console.log('----123---')
          this.update_user()
        } else {
          console.log('-----2-----')
          this.logout();
        }
      } else {
        console.log('-----3-----')
        this.logout();
      }


    },
    async update_user() {
      const response = await authService.profile()
      console.log(response)
      if (response) {
        this.profile= response.data
        this.username = response.data.username
        this.email = response.data.email
        this.mobile = response.data.mobile
        this.location()
      }else {
        console.log('-----4-----')
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
