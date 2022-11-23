import { defineStore } from 'pinia'

export const useEvents = defineStore('events', {
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        events: {}
    }),
    actions: {
        on(eventName, fn) {
            this.events[eventName] = this.events[eventName] || [];
            this.events[eventName].push(fn);
        },
    
        off(eventName, fn) {
            if (this.events[eventName]) {
                for (var i = 0; i < this.events[eventName].length; i++) {
                    if (this.events[eventName][i] === fn) {
                        this.events[eventName].splice(i, 1);
                        break;
                    }
                };
            }
        },
    
        emit(eventName, data) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function(fn) {
                    fn(data);
                });
            }
        }
    }
});
