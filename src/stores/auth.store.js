import { defineStore } from 'pinia';
import { router } from '@/routers';
import { authService } from '@/services'
import { useToast } from "vue-toastification";
const toast = useToast();

export const useAuthStore = defineStore('AUTH', {
  state: () => ({
    profile: { 
      "username": "xxxxx", 
      "email": "xxxxx", 
      "first_name": "xxxxx", 
      "last_name": "xxxxx", 
      "date_joined": "2000-01-01", 
      "terms": true, 
      "reference": "xxxxxxx", 
      "dob": "2000-01-01", 
      "mobile": "xxxxxx", 
      "gender": { "id": 100, "name": "Others" }, 
      "genders": [{ "id": 1, "name": "Male" }, { "id": 2, "name": "Female" }, { "id": 100, "name": "Others" }], 
      "country": { "id": 1, "name": "India" }, 
      "state": { "id": 1, "name": "Karnataka" }, 
      "city": { "id": 1, "name": "Bengaluru" }, 
      "pincode": 'xxxxx', 
      "professions": [{ "id": 1, "name": "Self Employed" }, { "id": 2, "name": "Home Maker" }, { "id": 3, "name": "Agriculture" }, { "id": 4, "name": "Medical" }, { "id": 5, "name": "Law" }, { "id": 6, "name": "Engineering" }, { "id": 7, "name": "Service" }, { "id": 8, "name": "Psu" }, { "id": 9, "name": "Student" }, { "id": 10, "name": "Teaching" }, { "id": 100, "name": "Others" }], 
      "profession": { "id": 6, "name": "Engineering" }, 
      "educations": [{ "id": 1, "name": "Phd" }, { "id": 2, "name": "Post Graduation" }, { "id": 3, "name": "Under Graduation" }, { "id": 4, "name": "Diploma" }, { "id": 5, "name": "High School" }, { "id": 100, "name": "Others" }], "education": { "id": 2, "name": "Post Graduation" }, 
      "linkedIn": "linked.com/xyz", 
      "step": 1, 
      "groups": [], 
      "roles": [{ "id": 1, "name": "TEACHER", "opted": true, "activate": false, "status": "Opted", "notes": "", "history": [], "description": null }, { "id": 2, "name": "ASSITANT", "opted": false, "activate": false, "status": false, "notes": "", "history": [] }, { "id": 3, "name": "ASSITANT", "opted": false, "activate": false, "status": false, "notes": "", "history": [] }], 
      "preferences": [{ "id": 1, "type": "Email", "status": false }, { "id": 2, "type": "Sms", "status": false }, { "id": 3, "type": "Watsapp", "status": false }],
      "language": { "id": 1, "name": 'English', "code": 101 },
      'abount': '',
    },
    token: '',
    access: '',
    refresh: '',
    returnUrl: '',
    locations: [{ id: 1, country: 'India', state: 'Delhi', city: 'Delhi' }],
    countries: [],
    languages: [{ "id": 1, "name": 'English', "code": 101 }],
    username: '',
    email: '',
    mobile: '',
    old_profile: {},
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
          if (+new Date <= access_data.exp) {
            console.log('token expaired');
            this.refresh();
            return null;
          }
          if (call_profile) {
            this.refreshUser();
          }
        } else {
          this.refresh()
        }
        return this.profile;
      }
      this.logout()
      return null;
    },
    profileChanges(){
      const diffMap = {};
      const map1 = JSON.parse(this.old_profile)
      const map2 = this.profile
      for (const key in map1) {
        if (typeof map1[key] === 'object' && map1[key] !== null) {
          if (!map2[key] || typeof map2[key] !== typeof map1[key]) {
            diffMap[key] = map2[key];
          } else if (Array.isArray(map1[key])) {
            const diffArrayValues = [];
            for (let i = 0; i < map1[key].length; i++) {
              const firstObject = map1[key][i];
              const secondObject = map2[key][i];

              if (JSON.stringify(firstObject) !== JSON.stringify(secondObject)) {
                diffArrayValues.push(secondObject);
              }
            }

            if (diffArrayValues.length > 0) {
              diffMap[key] = diffArrayValues;
            }
          } else {
            const changedObjectValues = {};
            for (const subKey in map1[key]) {
              if (JSON.stringify(map1[key][subKey]) !== JSON.stringify(map2[key][subKey])) {
                changedObjectValues[subKey] = map2[key][subKey];
              }
            }

            if (Object.keys(changedObjectValues).length > 0) {
              diffMap[key] = changedObjectValues;
            }
          }
        } else if (map1[key] !== map2[key]) {
          diffMap[key] = map2[key];
        }
      }
      return diffMap
    }
  },
  actions: {
    async login(username, password) {
      const response = await authService.login(username, password);
      if (response) {
        toast.success('login...',)
        this.access = response.access;
        this.refresh = response.refresh;
        this.token = response;
        localStorage.setItem('access', response.access);
        localStorage.setItem('refresh', response.refresh);
        document.cookie = response.refresh
        // localStorage.setItem('token', JSON.stringify(response));
        this.refreshUser()
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
          this.refreshUser()
        } else {
          this.logout();
        }
      } else {
        this.logout();
      }


    },
    async refreshUser() {
      const response = await authService.profile()
      if (response) {
        this.profile = response
        this.username = response.username
        this.email = response.email
        this.mobile = response.mobile
        this.location()
      } else {
        this.refreshToken();
      }
    },
    async location() {
      const response = await authService.location()
      if (response) {
        // this.locations = response.data['locations']
        this.languages = response.data['languages']
        const locations = response.data['locations']
        //--------------------------------------------
        this.countries = removeDuplicateNames(locations.map((location) => {
          return { id: location.id, name: location.country };
        }));
        this.profile.country = this.countries.filter((country) => country.name == this.profile.country)[0]
        //-------------------------------------------------------
        this.states = removeDuplicateNames(locations.map((location) => {
          return { id: location.id, name: location.state };
        }));
        this.profile.state = this.states.filter((state) => state.name == this.profile.state)[0]
        //-----------------------------------------------------
        this.cities = removeDuplicateNames(locations.map((location) => {
          return { id: location.id, name: location.city };
        }));
        this.profile.city = this.cities.filter((city) => city.name == this.profile.city)[0]
        //-------------------------------------------------

        this.old_profile = JSON.stringify(this.profile)
        return this.locations
      }


    },
    async updateProfile(){
      let pc = this.profileChanges
      if (Object.keys(pc).length == 0){
        return false
      }else{
        await authService.update_profile(pc).then(function(result) {
            // here you can use the result of promiseB
            console.log(result)
        });
          
        toast.success('personal details updated')
        
      }

    },
    // Other actions remain unchanged
  },
});

function removeDuplicateNames(data) {
  const uniqueNames = {};
  const filteredData = [];

  for (const item of data) {
    const name = item.name;
    if (!uniqueNames.hasOwnProperty(name)) {
      uniqueNames[name] = true;
      filteredData.push(item);
    }
  }

  return filteredData;
};

