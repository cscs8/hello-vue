<template>
  <div class="container">
    <p>axios data: {{data}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data: ""
    };
  },
  methods: {},

  created: async function() {
    const axios = require("axios");
    this.data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  }
};
</script>

