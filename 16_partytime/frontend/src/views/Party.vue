<template>
  <div class="party">
    <h1>Festa de aniversário do João</h1>
    <div class="party-container">
      <div class="party-images">
        <div class="main-image"></div>
        <div class="party-mini-images">
          <div class="mini-image"></div>
          <div class="mini-image"></div>
          <div class="mini-image"></div>
          <div class="mini-image"></div>
          <div class="mini-image"></div>
        </div>
      </div>
      <div class="party-details">
        <p class="bold">Descrição da festa:</p>
        <p class="party-description">Descrição da festa</p>
        <p class="bold">Data da festa:</p>
        <p class="party-date">25/02/1991</p>        
      </div>
    </div>
  </div>
</template>

<script>

export default {
    components: {
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