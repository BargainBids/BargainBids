<script setup lang="ts">

</script>

<template>
    <div class="wrapper">
        <admin-navbar />
        <div class="content-wrapper">
            <admin-sidebar />
            <div class="main-content"></div>
        </div>
    </div>
</template>

<style lang="scss">
.content-wrapper .main-content {
    overflow: hidden;
    margin-left: 24rem;
}
</style>