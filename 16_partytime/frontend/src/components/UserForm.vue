<template>
    <div>
        <Message :msg="msg" :msgClass="msgClass" />
        <form id="register-form" @submit="register($event)">
            <div class="input-container">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="email"  placeholder="Digite o seu e-mail">
            </div>
            <div class="input-container">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" v-model="password"  placeholder="Digite sua senha">
            </div>
            <div class="input-container">
                <label for="confirmpassword">Confirmação:</label>
                <input type="password" id="confirmpassword" name="confirmpassword" v-model="confirmpassword"  placeholder="Confirme sua senha">
            </div>
            <InputSubmit text="Cadastrar" />
        </form>
    </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message';

export default {
  name: "RegisterForm",
  components: {
    InputSubmit,
    Message
  },
  data() {
    return {
        name: null,
        email: null,
        password: null,
        confirmpassword: null,
        msg: null,
        msgClass: null,
    }
  },
  props: ["userName", "userEmail"] ,
  methods: {
    async register(e) {
        e.preventDefault();

        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            confirmpassword: this.confirmpassword
        }

        const jsonData = JSON.stringify(data);

        await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            let auth = false;

            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                auth = true;
                this.msg = data.msg;
                this.msgClass = "success";

                // Emit event for auth an user
                this.$store.commit("authenticate", {token: data.token, userId: data.userId});
            }
            
            setTimeout(() => {

                if(!auth) {
                    this.msg = null;                                   
                } else {
                    // redirect
                    this.$router.push('dashboard');
                }
                
            }, 2000);

        })
        .catch((err) => {
            console.log(err);
        })

    }
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