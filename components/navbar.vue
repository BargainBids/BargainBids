<template>
    <div class="navbar">
        <div class="navbar_logo">
        <img src="../server/static/images/fulltext_logo.png" alt="FullText logo" />
        </div>
        <div class="navbar_routers">
            <router-link class="router_button" to="/">Home</router-link>
            <router-link class="router_button" to="/products">Products</router-link>
            <searchbar />
        </div>
        <div>
            <img src="#" alt="User avatar" />
            <span>Username placeholder</span>
        </div>
    </div>
  </template>

<style>
@import "./styles/navbar.css";
</style>