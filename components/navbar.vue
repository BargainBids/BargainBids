<template>
    <div class="navbar">
        <div class="navbar_logo">
        <img src="../public/fulltext_logo.png" alt="FullText logo" />
        </div>
        <div class="navbar_routers">
            <router-link class="router_button" to="/">Home</router-link>
            <router-link class="router_button" to="/products">Products</router-link>
            <searchbar />
        </div>
        <div>
            <user />
        </div>
    </div>
  </template>

<style scoped lang="scss">
.navbar {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    background-color: #ffffff;
    height: 10vh;
    border: 2px solid red;
  }
  
  .navbar_logo img {
    height: 4.5rem;
  }

  .navbar_routers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    }
  
  .router_button {
    color: #ff5160;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
  }

  .router_button:hover {
    color: #00a2ff;
  }





  
</style>