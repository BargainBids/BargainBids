<script setup lang="ts">

</script>

<template>
    <div class="header">
        <div class="logo ">
            <a class="flex items-center" href="/admin">
                <nuxt-img fit="inside" format="webp" height="46" src="initials_logo-transformed.png" alt="Initials logo" />
                <span class="font-bold uppercase" style="color: var(--primary)">Bargain</span><span class="font-bold uppercase" style="color: var(--secondary)">Bay</span>
            </a>
        </div>
        <div class="search-box">

        </div>
        <div class="admin-user flex flex-grow justify-end items-center">

        </div>
    </div>
</template>

<style lang="scss">
.logo {
    display: flex;
    height: 100%;

    a {
        align-self: center;
        padding: 3px;
    }
}
</style>