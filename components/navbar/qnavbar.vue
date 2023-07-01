<template>
  <div>
    <q-toolbar class="bg-secondary text-white shadow-2 toolbar_color">
      <router-link class="router_button" to="/">
        <q-btn align="between" class="btn-fixed-width q-ml-md btn_color" color="accent" label="Home" icon="home" />
      </router-link>
      <router-link class="router_button" to="/qtest">
        <q-btn align="between" class="btn-fixed-width q-ml-md btn_color" color="accent" label="Products" icon="shopping_bag" />
      </router-link>
      <q-space />


      <navbar-quserdropdown />
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.btn_color {
  background-color: #3a98d6  !important;
}
.toolbar_color {
  background-color:  #68c3ff !important;
}
</style>
