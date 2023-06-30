<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="options"
      />    
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
      model: ref('one'),

      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' }
      ]
    }
  }
}
</script>
