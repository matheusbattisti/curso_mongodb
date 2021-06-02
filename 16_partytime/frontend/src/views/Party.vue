<template>
  <div class="party">
    <h1>{{ party.title }}</h1>
    <div class="party-container">
      <div class="party-images" v-if="party.photos">
        <div class="main-image" :style="{'background-image': 'url(' + party.photos[0] +')'}"></div>
        <div class="party-mini-images" v-if="party.photos[1]">
          <div class="mini-image" v-for="(photo, index) in party.photos" :key="index" :style="{'background-image': 'url(' + party.photos[index] +')'}"></div>
        </div>
      </div>
      <div class="party-details">
        <p class="bold">Descrição da festa:</p>
        <p class="party-description">{{ party.description }}</p>
        <p class="bold">Data da festa:</p>
        <p class="party-date">{{ party.partyDate }}</p>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
          party: {},
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

            await fetch(`http://localhost:3000/api/party/${id}`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    "auth-token": token 
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                this.party = data.party;

                this.party.partyDate = new Date(this.party.partyDate).toLocaleDateString();

                this.party.photos.forEach((photo, index) => {
                  this.party.photos[index] = photo.replace("public", "http://localhost:3000").replaceAll("\\", "/");
                });

                console.log(this.party);
                console.log(this.party.photos);

            })
            .catch((err) => {
                console.log(err);
            })

        }
    }
}
</script>

<style scoped>
    .party {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
        width: 1000px;
        margin: 0 auto;
    }

    .party h1 {
        margin-bottom: 40px;
    }

    .party-container {
      display: flex;
    }

    .party-images {
      width: 380px;
      margin-right: 30px;
    }

    .main-image {
      width: 100%;
      height: 200px;
      background-color: #CCC;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
    }

    .party-mini-images {
      display: flex;
      flex-wrap: wrap;
    }

    .mini-image {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      background-color: #CCC;
      margin-bottom: 15px;
      background-position: center;
      background-size: cover;
    }

    .party-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .bold {
      font-weight: bold;
      margin-bottom: 12px;
    }

    .party-description, .party-date {
      margin-bottom: 20px;
    }
</style>