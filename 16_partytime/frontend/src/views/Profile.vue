<template>
  <div class="profile">
    <h1>Edite seu perfil</h1>
    <UserForm />
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
    components: {
        UserForm
    },
    created() {
        // load user
        this.getUser();
    },
    methods: {
    async getUser() {

        const id = this.$store.getters.userId;

        await fetch(`http://localhost:3000/api/user/${id}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            console.log(data);

        })
        .catch((err) => {
            console.log(err);
        })

    }
  }
}
</script>

<style scoped>
    .register {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .register h1 {
        margin-bottom: 40px;
    }
</style>