<template>
  <div id="app">
    <HelloWorld :title="message" v-on:result-event="appAction" />
    <hr />
    <button v-on:click="doAction">change title</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: "HELLO",
      result: "no event."
    };
  },
  methods: {
    doAction: function() {
      var input = prompt("new title:");
      this.message = input;
    },
    appAction: function(message) {
      this.result = '(*** you send:"' + message + '". ***)';
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

