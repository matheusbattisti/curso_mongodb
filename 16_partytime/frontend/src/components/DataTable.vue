<template>
  <div class="data-container">
      <div class="data-table-heading">
          <div class="data-id-heading">ID:</div>
          <div class="data-title-heading">Nome da Festa:</div>
          <div class="data-actions-heading">Ações:</div>
      </div>
      <div class="data-table-body">
        <div class="data-row">
            <div class="data-id-container">01</div>
            <div class="data-title-container">
                <a href="">Primeiro evento</a>
            </div>
            <div class="data-actions-container">
                <router-link to="/editparty" class="edit-btn">Editar</router-link>
                <button class="remove-btn">Remover</button>
            </div>
        </div>
        <div class="data-row">
            <div class="data-id-container">01</div>
            <div class="data-title-container">
                <a href="">Primeiro evento</a>
            </div>
            <div class="data-actions-container">
                <router-link to="/editparty" class="edit-btn">Editar</router-link>
                <button class="remove-btn">Remover</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

    .data-table-heading, .data-row {
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #CCC;
    }

    .data-table-heading div, .data-row div {
        flex: 1 1 0;
    } 

    .data-id-heading, .data-id-container {
        max-width: 50px
    }

    .edit-btn, .remove-btn {
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

    .edit-btn {
        background-color: #007bff;
    }

    .edit-btn:hover {
        background-color: #0069d9;
    }

    .remove-btn {
        background-color: #dc3545;
    }

    .remove-btn:hover {
        background-color: #c82333;
    }

</style>