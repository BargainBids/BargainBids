<template>
<div class="q-pa-md q-gutter-sm">
  <q-avatar rounded>
    <q-img :src="url" />
  </q-avatar>
</div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useCurrentUser } from "vuefire";

export default {
  setup() {

    const currentUser = useCurrentUser();
    const url = ref('');
    watchEffect(() => {
      if (currentUser.value) {
        url.value = currentUser.value.photoURL;
        console.log("I'm getting from quser: ", currentUser.value.displayName);
      }
    });

    return {
      url,
    }
  }
}
</script>
