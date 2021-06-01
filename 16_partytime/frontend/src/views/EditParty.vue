<template>
  <div class="editparty">
    <h1>Edite a sua festa:</h1>
    <PartyForm :party="{}" page="editparty" btnText="Editar Festa" :key="componentKey"  />
  </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

export default {
    components: {
        PartyForm
    },
    data() {
        return {
            party: {},
            componentKey: 0
        }
    },
    created() {
        // load party
        this.getParty();
    },
    methods: {
        async getParty() {

            // get id from url and token from state
            const id = this.$route.params.id;
            const token = this.$store.getters.token;

            await fetch(`http://localhost:3000/api/party/userparty/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                console.log(data);

                this.party = data.party;

                this.componentKey += 1;

            })
            .catch((err) => {
                console.log(err);
            })

        }
    }
}
</script>

<style scoped>
    .editparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .editparty h1 {
        margin-bottom: 40px;
    }
</style>