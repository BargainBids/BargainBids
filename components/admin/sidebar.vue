<script setup lang="ts">
    import {
        HomeIcon,
        ArchiveBoxIcon,
        GiftIcon,
        LinkIcon,
        TagIcon,
        HashtagIcon,
        CubeIcon,
        UsersIcon
    } from '@heroicons/vue/24/solid'
</script>

<template>
    <div class="admin-navigation">
        <div class="admin-nav-container">
            <div class="admin-nav">
                <ul class="list-unstyled">
                    <li class="root-nav-item nav-item">
                        <div class="flex justify-between items-center">
                            <div class="root-label flex justify-between items-center">
                                <span>Quick Links</span>
                            </div>
                        </div>
                        <ul class="item-group">
                            <li class="nav-item active">
                                <router-link to="/admin" class="flex justify-left">
                                    <i class="menu-icon"><HomeIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Dashboard</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/products/new" class="flex justify-left">
                                    <i class="menu-icon"><ArchiveBoxIcon class="h-6 w-6 mr-2" /></i>
                                    <span>New Product</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/coupon/new" class="flex justify-left">
                                    <i class="menu-icon"><GiftIcon class="h-6 w-6 mr-2" /></i>
                                    <span>New Coupon</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="root-nav-item nav-item">
                        <div class="flex justify-between items-center">
                            <div class="root-label flex justify-between items-center">
                                <span>Catalog</span>
                            </div>
                        </div>
                        <ul class="item-group">
                            <li class="nav-item">
                                <router-link to="/admin/products" class="flex justify-left">
                                    <i class="menu-icon"><ArchiveBoxIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Products</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/categories" class="flex justify-left">
                                    <i class="menu-icon"><LinkIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Categories</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/collections" class="flex justify-left">
                                    <i class="menu-icon"><TagIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Collections</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/attributes" class="flex justify-left">
                                    <i class="menu-icon"><HashtagIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Attributes</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="root-nav-item nav-item">
                        <div class="flex justify-between items-center">
                            <div class="root-label flex justify-between items-center">
                                <span>Sale</span>
                            </div>
                        </div>
                        <ul class="item-group">
                            <li class="nav-item">
                                <router-link to="/admin/orders" class="flex justify-left">
                                    <i class="menu-icon"><CubeIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Orders</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="root-nav-item nav-item">
                        <div class="flex justify-between items-center">
                            <div class="root-label flex justify-between items-center">
                                <span>Customer</span>
                            </div>
                        </div>
                        <ul class="item-group">
                            <li class="nav-item">
                                <router-link to="/admin/customers" class="flex justify-left">
                                    <i class="menu-icon"><UsersIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Customers</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="root-nav-item nav-item">
                        <div class="flex justify-between items-center">
                            <div class="root-label flex justify-between items-center">
                                <span>Promotion</span>
                            </div>
                        </div>
                        <ul class="item-group">
                            <li class="nav-item">
                                <router-link to="/admin/coupons" class="flex justify-left">
                                    <i class="menu-icon"><GiftIcon class="h-6 w-6 mr-2" /></i>
                                    <span>Coupons</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
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

    li a {
        line-height: 35px;
        font-weight: 600;
    }
}

.list-unstyled {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item {
    margin-top: 2px;

    > a, .root-label {
        padding-left: 1rem;
        margin-left: 1rem;
    }

    &.active {
        position: relative;

        a {
            color: var(--primary);
            background-color: #edeeef;
            border-radius: 4px;
        }

        ::before {
            content: "";
            width: 3.5px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            border-radius: 0 4px 4px 0;
            background-color: var(--primary);
        }
    }

    .item-group .nav-item > a {
        padding-left: 2rem;
    }

    .menu-icon {
        padding-right: 10px;
        align-self: center;
    }
}

.admin-nav {
    > ul > li {
        margin-top: 1rem;
    }

    .root-label {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
    }

    li span {
        line-height: 35px;
        font-weight: 600;
    }
}

.root-label span:first-child {
    padding-right: 10px;
}
</style>