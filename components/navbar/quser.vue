<template>
<div class="q-pa-md q-gutter-sm">
  <q-avatar rounded>
    <q-img :src="picurl" />
  </q-avatar>
  <p>{{ userName }}</p>
</div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useCurrentUser } from "vuefire";

export default {
  setup() {

    const currentUser = useCurrentUser();
    const picurl = ref('');
    const userName = ref('');
    watchEffect(() => {
      if (currentUser.value) {
        picurl.value = currentUser.value.photoURL;
        userName.value = currentUser.value.displayName;
        console.log("I'm getting from quser: ", currentUser.value.displayName);
      }
    });

    return {
      picurl,
      userName
    }
  }
}
</script>
