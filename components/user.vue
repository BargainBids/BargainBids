<template>
    <div>
      <button @click="signInWithPopup">Sign In!</button>
      <img src="#" alt="User avatar" />
      <span>Username placeholder</span>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  
  export default {
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
    },
    methods: {
      signInWithPopup() {
        signInWithPopup(this.auth, this.provider)
          .then((result) => {
            // Handle success
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("Success!");
          })
          .catch((error) => {
            // Handle error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error from login: " + errorCode, errorMessage);
          });
      },
    },
  };
  </script>
  