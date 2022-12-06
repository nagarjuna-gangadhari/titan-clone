import { defineStore } from 'pinia'

export const useEvents = defineStore('events', {
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        centerpop: false,
    }),
    actions: {
        toggle_centerpop() {
            this.centerpop = !this.centerpop
       }
    }
});
