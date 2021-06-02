<template>
  <div class="home">
    <h1>Veja as últimas festas</h1>
    <div class="parties-container">
        <div v-for="(party, index) in parties" :key="index" class="party-container">
            <div class="party-img" :style="{'background-image': 'url(' + party.photos[0] +')'}"></div>
            <a class="party-title" href="#">{{ party.title }}</a>
            <p class="party-date">Data: {{ party.partyDate }}</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-1"></div>
            <a class="party-title" href="#">Festa de aniversário do Paulo</a>
            <p class="party-date">Data: 05/02/2012</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-2"></div>
            <a class="party-title" href="#">Festa da empresa EuroTI</a>
            <p class="party-date">Data: 06/12/2020</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-3"></div>
            <a class="party-title" href="#">Aniversário da Patrícia</a>
            <p class="party-date">Data: 13/11/2018</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-4"></div>
            <a class="party-title" href="#">Reveillon de Floripa</a>
            <p class="party-date">Data: 31/12/2019</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    data() {
        return {
            parties: []
        }
    },
    created() {
        // load public parties
        this.getParties();
    },
    methods: {
        async getParties() {

            await fetch(`http://localhost:3000/api/party/all`, {
                method: "GET",
                headers: { 
                    "Content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {

                data.parties.forEach((party, index) => {

                    if(party.partyDate) {
                        party.partyDate = new Date(party.partyDate).toLocaleDateString();
                    }

                    party.photos.forEach((photo, index) => {
                        party.photos[index] = photo.replace("public", "http://localhost:3000").replaceAll("\\", "/");
                    });

                });

                this.parties = data.parties;

            })
            .catch((err) => {
                console.log(err);
            })

        }
    }
}
</script>
<style scoped>

    .home {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .home h1 {
        margin-bottom: 40px;
    }

    .parties-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
    }

    .party-container {
        width: 30.3%;
        margin: 1.5%;
        display: flex;
        flex-direction: column;
    }

    .party-img {
        width: 100%;
        height: 200px;
        margin-bottom: 12px;
        background-position: center;
        background-size: cover;
    }

    .party-title {
        color: #25282e;
        text-decoration: none;
        margin-bottom: 12px;
    }

    .party-date {
        color: #777;
        margin-bottom: 12px;
    }

    .party-details-btn {
        width: 100%;
        text-transform: uppercase;
        color: #fff;
        background-color: #25282e;
        transition: .5s;
        border: 0;
        padding: 12px;
        text-decoration: none;
        text-align: center;
    }

    .party-details-btn:hover {
        background-color: #141619;
    }
    
    #party-1 {
        background-image: url('/img/party1.jpg');
    }

    #party-2 {
        background-image: url('/img/party2.jpg');
    }

    #party-3 {
        background-image: url('/img/party3.jpg');
    }

    #party-4 {
        background-image: url('/img/party4.jpg');
    }

</style>
