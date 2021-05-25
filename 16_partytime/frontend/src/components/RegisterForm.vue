<template>
    <form id="register-form">
        <div class="input-container">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite o seu nome">
        </div>
        <div class="input-container">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite o seu e-mail">
        </div>
        <div class="input-container">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha">
        </div>
        <div class="input-container">
            <label for="confirmpassword">Confirmação:</label>
            <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirme sua senha">
        </div>
        <InputSubmit text="Cadastrar" />
    </form>
</template>

<script>
import InputSubmit from './form/InputSubmit'

export default {
  name: "RegisterForm",
  components: {
    InputSubmit
  }
}
</script>

<style scoped>
    #register-form {
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