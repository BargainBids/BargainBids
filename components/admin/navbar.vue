<script lang="ts">
import NavSearchbox from "~/components/admin/nav-searchbox.vue";

export default {
    components: {
        NavSearchbox,
    },
    setup() {
        const isActive = ref(false);

        const showDrop = () => {
            isActive.value = !isActive.value;
        };

        return {
            isActive,
            showDrop,
        };
    },
};
</script>

<template>
    <div class="header">
        <div class="logo ">
            <a class="flex items-center" href="/admin">
                <nuxt-img fit="inside" format="webp" height="46" src="initials_logo-transformed.png" alt="Initials logo" />
                <span class="font-bold uppercase" style="color: var(--primary)">Bargain</span><span class="font-bold uppercase" style="color: var(--secondary)">Bay</span>
            </a>
        </div>
        <nav-searchbox />
        <div class="admin-user flex flex-grow justify-end items-center">
            <div class="flex justify-items-start gap-1 justify-center">
                <div class="relative">
                    <a class="first-letter" href="#" @click.prevent="showDrop">P</a>
                    <div v-if="isActive" class="logout bg-background shadow p-8">
                        <div>
                            <div>
                                Hello <span class="text-primary">Patrick!</span>
                            </div>
                            <div class="mt-4">
                                <a class="text-danger" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.6rem;
    padding: 0 1rem;
    background-color: white;
    z-index: 100;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}

.logo {
    display: flex;
    height: 100%;

    a {
        align-self: center;
        padding: 3px;
    }
}

.admin-user {
    .first-letter {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background-color: var(--primary);
        font-weight: 600;
    }

    .logout {
        position: absolute;
        right: 0;
        top: 115%;
        width: 230px;
        background-color: var(--background);
    }
}

.text-primary {
    color: var(--text-secondary);
}
.text-danger {
    color: var(--text-danger);
}
</style>