<script setup lang="ts">
const route = useRoute()
console.log(route.path);
console.log(route.params.id);
</script>

<template>
    <NuxtPage />
</template>
