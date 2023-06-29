import { defineStore } from 'pinia';

export const useUserAuthStore = defineStore({
  id: 'userAuth',
  state: () => ({
    userAuth: null,
  }),
  getters: {
    getUserAuth(): any {
      return this.userAuth;
    },
  },
  actions: {
    authorizeUser(userAuth: any) {
      this.userAuth = userAuth;
    },
    },
});

