<template>
    <Navbar />
    <div class="wrapper">
        <myprofile-revenuebox />
        <myprofile-myproducts />
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.wrapper {
    color: black;
    display: flex;
    flex-direction: row;
    border: 3px solid blue;
    justify-content: space-between;
}
</style>