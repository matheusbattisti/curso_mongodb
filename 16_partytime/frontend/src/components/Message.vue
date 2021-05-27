<template>
  <p class="msg" :class="msgClass" v-if="msg">{{ msg }}</p>
</template>

<script>
export default {
  name: "Message",
  props: ["msg", "msgClass"]
}
</script>

<style scoped>

  .msg {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #CCC;
    border-radius: 5px;
  }

  .error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

</style>