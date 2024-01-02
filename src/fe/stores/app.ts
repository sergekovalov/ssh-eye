import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return { page: 'home' }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setPage(page: string) {
      this.page = page;
    },
  },
})