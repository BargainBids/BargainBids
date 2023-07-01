<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      class="glossy"
      color="bg-secondary"
      label="My account"
    >
      <div class="row no-wrap q-pa-md">
        <div v-if="user" class="column">
          <div class="text-h6 q-mb-md">Options</div>
          <router-link class="router_button" to="/">
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>My Profile</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="person" />
            </q-item-section>
          </q-item>
        </router-link>
          <router-link class="router_button" to="/">
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>My page</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="contact_page" />
            </q-item-section>
          </q-item>
        </router-link>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <navbar-quser :user="user" />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useCurrentUser } from 'vuefire';

export default {
  setup() {
    const currentUser = useCurrentUser();
    const user = ref('');
    watchEffect(() => {
      if (currentUser.value) {
        user.value = currentUser.value;
      } else {
        user.value = null;
      }
    });
    return {
      user
    };
  }
}
</script>
