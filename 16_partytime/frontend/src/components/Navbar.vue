<template>
  <div id="nav">
    <router-link to="/" id="logo-container">
      <img src="/img/partytimelogo.png" alt="Party Time">
    </router-link>    
    <h2 id="nav-title">Party Time</h2>
    <div id="nav-links">
      <router-link to="/">Festas</router-link>
      <router-link to="/login" v-show="!authenticated">Entrar</router-link>
      <router-link to="/register" v-show="!authenticated">Cadastrar</router-link>
      <router-link to="/dashboard" v-show="authenticated">Dashboard</router-link>
      <router-link to="/profile" v-show="authenticated">Configurações</router-link>
      <button @click="logout($event)" v-show="authenticated">Logout</button>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {  
  name: "Navbar",
  data () {
    return {

    }
  },
  methods: {
    logout(e) {
      e.preventDefault();

      // Emit event to logout user
      this.$store.commit("logout");
      // redirect
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState([
        'authenticated',
    ])
}
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
    width: 400px;
  }

  #nav-links {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background-color: #FFF;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    color: #c1b696;
  }
</style>