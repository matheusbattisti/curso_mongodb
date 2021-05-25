<template>
    <form id="register-form">
        <div class="input-container">
            <label for="title">Título do Evento:</label>
            <input type="text" id="title" name="title" placeholder="Digite o título">
        </div>
        <div class="input-container">
            <label for="description">Descrição:</label>
            <textarea id="description" name="description" placeholder="O que vai acontecer ou o que já aconteceu?"></textarea>
        </div>
        <div class="input-container">
            <label for="party_date">Data da Festa:</label>
            <input type="date" id="party_date" name="party_date">
        </div>
        <div class="input-container">
            <label for="photos">Imagens:</label>
            <input type="file" multiple id="photos" name="photos">
        </div>
        <div class="input-container checkbox-container">
            <label for="privacy">Evento privado</label>
            <input type="checkbox" multiple id="privacy" name="privacy">
        </div>
        <InputSubmit text="Criar Festa!" />
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

    .input-container input,
    .input-container textarea {
        padding: 10px;
        border: 1px solid #e8e8e8;
    }

    .checkbox-container {
        flex-direction: row;
    }

    .checkbox-container input[type='checkbox'] {
        margin-left: 12px;
        margin-top: 3px;
    }
    
</style>