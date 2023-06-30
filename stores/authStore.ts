import { defineStore } from 'pinia';

export const useUserAuthStore = defineStore({
  id: 'userAuth',
  state: () => ({
    userAuth: null,
  }),
  getters: {
    getUserAuth() {
      return this.userAuth;
    },
    getUserPicture() {
      return this.userAuth.photoURL;
    },
    getUserName() {
      return this.userAuth.displayName;
    }
  },
  actions: {
    authorizeUser(userAuth: any) {
      this.userAuth = userAuth;
    },
    },
});

