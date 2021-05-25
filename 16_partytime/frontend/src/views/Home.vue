<template>
  <div class="home">
    <h1>Veja as últimas festas</h1>
    <div class="parties-container">
        <div class="party-container">
            <div class="party-img" id="party-1"></div>
            <a class="party-title" href="#">Festa de aniversário do Paulo</a>
            <p class="party-date">Data: 05/02/2012</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-2"></div>
            <a class="party-title" href="#">Festa de aniversário do Paulo</a>
            <p class="party-date">Data: 05/02/2012</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
        <div class="party-container">
            <div class="party-img" id="party-3"></div>
            <a class="party-title" href="#">Festa de aniversário do Paulo</a>
            <p class="party-date">Data: 05/02/2012</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
                <div class="party-container">
            <div class="party-img" id="party-4"></div>
            <a class="party-title" href="#">Festa de aniversário do Paulo</a>
            <p class="party-date">Data: 05/02/2012</p>
            <a href="#" class="party-details-btn">Ver Mais</a>
        </div>
    </div>
  </div>
</template>

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

</style>
