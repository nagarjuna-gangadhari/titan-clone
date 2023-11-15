export * from './auth.store';
import { defineStore } from 'pinia'
export const GeneralStore = defineStore('General', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        sidebarOpened: false,
        sidebarHover: false,
        selectedfontFamily: 'font-mono'
      }
    },
  })