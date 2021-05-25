<template>
  <div id="nav">
    <router-link to="/" id="logo-container">
      <img src="/img/partytimelogo.png" alt="Party Time">
    </router-link>    
    <h2 id="nav-title">Party Time</h2>
    <div id="nav-links">
      <router-link to="/">Festas</router-link>
      <router-link to="/login">Entrar</router-link>
      <router-link to="/register">Cadastrar</router-link>
    </div>
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
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }

  #nav a {
    text-decoration: none;
    margin-right: 15px;
  }

  #nav img {
    width: 35px;
  }

  #nav-title {
    font-size: 3rem;
    font-weight: 300;
  }

  #logo-container, #nav-links {
    width: 200px;
  }
</style>