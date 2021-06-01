<template>
  <div class="editparty">
    <h1>Edite a sua festa:</h1>
    <PartyForm />
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
    .editparty {
        text-align: center;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    .editparty h1 {
        margin-bottom: 40px;
    }
</style>