import { defineStore } from 'pinia'

export const useLauncherModalStore = defineStore('launcherModal', {
  state: () => ({
    open: false
  }),
  actions: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    },
    toggleModal() {
      this.open = !this.open
    }
  }
})
