<template>
  <div class="register">
    <h1>Criar uma conta</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'

export default {
    components: {
        RegisterForm
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