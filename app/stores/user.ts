import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): { user: User | null } => ({
    user: null,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
    },

    updateName(newName: string) {
      if (this.user) {
        this.user.name = newName;
      }
    }
  },
});
