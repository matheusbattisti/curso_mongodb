<template>
  <div class="register">
    <h1>Criar uma conta</h1>
    <UserForm />
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
    components: {
        UserForm
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