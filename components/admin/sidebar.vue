<script setup lang="ts">

</script>

<template>
    <div class="admin-navigation">
        <div class="admin-nav-container">
            <div class="admin-nav">
                <ul class="list-unstyled">

                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.admin-navigation {
    width: 24rem;
    float: left;
    height: 100vh;
    border-right: 1px solid var(--divider);
    position: fixed;
    left: 0;
    top: 5.6rem;
    padding-right: 4px;
    padding-bottom: 15rem;
    overflow-y: scroll;
}

.list-unstyled {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>