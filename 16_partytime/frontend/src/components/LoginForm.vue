<template>
    <form id="login-form">
        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite o seu e-mail">
        </div>
        <div class="input-container">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha">
        </div>
        <InputSubmit text="Entrar" />
    </form>
</template>

<script>
import InputSubmit from './form/InputSubmit'

export default {
  name: "LoginForm",
  components: {
      InputSubmit
  }
}
</script>

<style scoped>
    #login-form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        text-align: left;
    }

    .input-container label {
        margin-bottom: 10px;
        color: #555;
    }

    .input-container input {
        padding: 10px;
        border: 1px solid #e8e8e8;
    }
    
</style>