<template>
  <div class="container">
    <pre>axios data: {{axiosData}}</pre>
  </div>
</template>

<script>
const axios = require("axios");
var url =
  // "https://jsonplaceholder.typicode.com/todos/1";
  "/README.md";

export default {
  data: function() {
    return {
      axiosData: ""
    };
  },
  // methods: {},

  created: async function() {
    let result = await axios.get(url);
    this.axiosData = result.data;
  },
  asyncData: async function() {
    this.axiosData = await axios.get(url);
    return;
  }
};
</script>


<style>
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
</style>