<template>
  <div class="userinfo">
    <div class="userIsIn" v-if="user">
      <img :src="user.photoURL" alt="Profile Picture" />
      <div class="userIsInText">
        <h2>Welcome, {{ user.displayName }}</h2>
        <button @click="logout">log out</button>
      </div>
    </div>
    <div v-else>
      <button @click="signInWithPopup">Sign in with Google</button>
    </div>
  </div>
</template>
  
  <script>
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useUserAuthStore } from '../stores/authStore.ts';
import { useCurrentUser } from "vuefire";

export default {
  setup() {
    const userAuth = useUserAuthStore();
    const user = useCurrentUser();
    console.log(user);
    return { userAuth, user };
  },
  mounted() {
    const firebaseConfig = {
      apiKey: "AIzaSyBT8eLeWjW3wzgbtuP11q3YE86SxvxqpkM",
      authDomain: "bargainbids23.firebaseapp.com",
      projectId: "bargainbids23",
      storageBucket: "bargainbids23.appspot.com",
      messagingSenderId: "175442582499",
      appId: "1:175442582499:web:0ae391dda639064c5d1ed6",
      measurementId: "G-81GBRV9TMT"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    this.auth = auth;
    this.provider = provider;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log("User is signed in");
      } else {
        this.user = null;
        console.log("User is signed out");
      }
    });
  },
  methods: {
    signInWithPopup() {
      const userAuth = useUserAuthStore();
      signInWithPopup(this.auth, this.provider)
        .then((result) => {
          // Handle success
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log("Success!");
          console.log(result.user.displayName, result.user.email, result.user.photoURL);
          userAuth.authorizeUser(result.user);
          console.log("current user from state: ", userAuth.getUserAuth.displayName);
        })
        .catch((error) => {
          // Handle error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error from login: " + errorCode, errorMessage);
        });
    },
    logout() {
      signOut(this.auth)
        .then(() => {
          console.log("Successfully logged out");
        })
        .catch((error) => {
          console.log("Logout failed");
        });
    }
  },
};


  </script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  border: 3px solid blue;
}

.userIsIn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  border: 3px solid yellow;
}

.userIsIn img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.userIsInText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  border: 3px solid red;
}
</style>
  