<template>
  <div class="newparty">
    <h1>Adicione a sua festa:</h1>
    <PartyForm :party="{}" page="newparty" btnText="Criar Festa!" />
  </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

export default {
    components: {
        PartyForm
    }
}
</script>

<style scoped>
    .newparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .newparty h1 {
        margin-bottom: 40px;
    }
</style>