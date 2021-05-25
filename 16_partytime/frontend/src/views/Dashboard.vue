<template>
  <div class="dashboard">
    <div class="title-container">
        <h1>Gerencie seus eventos</h1>
        <router-link to="/newparty" class="btn">Cadastrar Festa</router-link>
    </div>
    <DataTable />
  </div>
</template>

<script>
import DataTable from '../components/DataTable'

export default {
    components: {
        DataTable
    }
}
</script>

<style scoped>
    .dashboard {
        padding: 50px;
        padding-bottom: 100px;
    }

    .title-container {
        display: flex;        
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    
    .btn {
        padding: 10px 16px;
        background-color: #000;
        color: #FFF;
        margin: 5px;
        text-decoration: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
        transition: .5s;
    }
    
</style>