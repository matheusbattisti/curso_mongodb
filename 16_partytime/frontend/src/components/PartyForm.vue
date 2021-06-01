<template>
    <div>
        <Message :msg="msg" :msgClass="msgClass" />
        <form id="register-form" enctype="multipart/form-data" @submit="page === 'newparty' ? createParty($event) : update($event)">
            <input type="hidden" id="id" name="id" v-model="id">
            <input type="hidden" id="user_id" name="user_id" v-model="user_id">
            <div class="input-container">
                <label for="title">Título do Evento:</label>
                <input type="text" id="title" name="title" v-model="title" placeholder="Digite o título">
            </div>
            <div class="input-container">
                <label for="description">Descrição:</label>
                <textarea id="description" name="description" v-model="description" placeholder="O que vai acontecer ou o que já aconteceu?"></textarea>
            </div>
            <div class="input-container">
                <label for="party_date">Data da Festa:</label>
                <input type="date" id="party_date" name="party_date" v-model="party_date">
            </div>
            <div class="input-container">
                <label for="photos">Imagens:</label>
                <input type="file" multiple="multiple" id="photos" name="photos" ref="file" @change="onChange">
            </div>
            <div class="input-container checkbox-container">
                <label for="privacy">Evento privado</label>
                <input type="checkbox" multiple id="privacy" name="privacy" v-model="privacy">
            </div>
            <InputSubmit :text="btnText" />
        </form>
    </div>
</template>

<script>
import InputSubmit from './form/InputSubmit'
import Message from './Message'

export default {
  name: "RegisterForm",
  components: {
    InputSubmit,
    Message
  },
  data() {
      return {
        id: this.party._id || null,
        title: this.party.title || null,
        description: this.party.description || null,
        party_date: this.party.partyDate || null,
        photos: [],
        privacy: this.party.privacy || false,
        user_id: this.party.userId || null,
        msg: null,
        msgClass: null,
      }
  },
  props: ["party", "page", "btnText"],
  methods: {
      async createParty(e) {
        
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', this.title);
        formData.append('description', this.description);
        formData.append('party_date', this.party_date);
        formData.append('privacy', this.privacy);

        if(this.photos.length > 0) {
            for (const i of Object.keys(this.photos)) {
                formData.append('photos', this.photos[i])
            }
        }

        // get token from state
        const token = this.$store.getters.token;

        await fetch("http://localhost:3000/api/party", {
            method: "POST",
            headers: {
                "auth-token": token
            },
            body: formData
        })
        .then((resp) => resp.json())
        .then((data) => {

            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                this.msg = data.msg;
                this.msgClass = "success";
            }
            
            setTimeout(() => {

                this.msg = null;   

                // redirect
                if(!data.error) {                    
                    this.$router.push('dashboard');
                }
                
            }, 2000);

        })
        .catch((err) => {
            console.log(err);
        })

    
      },
      onChange(e) {

        this.photos = e.target.files;

      },
      async update(e) {
        e.preventDefault();

        const data = {
            id: this.id,
            title: this.title,
            description: this.description,
            party_date: this.party_date,
            privacy: this.privacy,
            user_id: this.user_id
        }

        const jsonData = JSON.stringify(data);

        // get token from state
        const token = this.$store.getters.token;

        await fetch("http://localhost:3000/api/party", {
            method: "PUT",
            headers: { 
                "Content-type": "application/json",
                "auth-token": token 
            },
            body: jsonData
        })
        .then((resp) => resp.json())
        .then((data) => {

            if(data.error) {
                this.msg = data.error;
                this.msgClass = "error";
            } else {
                this.msg = data.msg;
                this.msgClass = "success";
            }

        })
        .catch((err) => {
            console.log(err);
        })

        setTimeout(() => {

            this.msg = null;     
            
        }, 2000);

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