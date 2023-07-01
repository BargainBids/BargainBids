<template>
<div class="q-pa-md q-gutter-sm">
  <div v-if="user" class="userimg">
    <q-avatar rounded>
    <q-img :src="picurl" />
  </q-avatar>
  <div class="text-subtitle1 q-mt-md q-mb-xs text-weight-bold"> {{ user.displayName }}</div>
  <div class="logout_btn">
    <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
            @click="signOut"
          />
  </div>

  </div>
  <div v-else>
    <q-btn
            color="primary"
            label="Login"
            push
            size="sm"
            v-close-popup
            @click="signInWithGoogle"
          />
  </div>
</div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import { useFirebaseAuth } from 'vuefire';

export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const user = ref('');
    const picurl = ref('');
    const auth = useFirebaseAuth();
    //Props is a leftover from the past, but saved so i can remember how to do props 🙃
    watchEffect(() => {
      if (auth.currentUser) {
      user.value = auth.currentUser;
      picurl.value = auth.currentUser.photoURL;
      console.log("I'm getting from quser: ", props.user.displayName);
      console.log(props.user);
    } else {
      user.value = null;
      picurl.value = null;
      console.log("I was set to null")
    }
    });

    const signOut = () => {
      auth.signOut();
    };

    const signInWithGoogle = () => {
      signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user logged in", user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    };
    return {
      user,
      picurl,
      signOut,
      signInWithGoogle
    }
  }
}
</script>

<style>
.userimg {
  display: flex; 
  flex-direction: column; 
  align-items: center;
}

.logout_btn {
  margin-top: 20%;
}
</style>