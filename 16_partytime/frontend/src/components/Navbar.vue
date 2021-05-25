<template>
  <div id="nav">
    <img src="/img/partytimelogo.png" alt="Party Time">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>


<script>
export default {
  name: "Navbar"
}
</script>
<style scoped>
  #nav {
    display: flex;
    align-items: center;
  }
</style>