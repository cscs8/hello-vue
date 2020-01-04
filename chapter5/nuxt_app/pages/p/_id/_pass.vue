<template>
  <div class="container">
    <logo />
    <h1 class="title">{{ title }}</h1>
    <p v-html="message">no message.</p>
    <hr />
    <div class="right">
      <router-link to="/">Go to Top</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      title: "Login"
    };
  },
  computed: {
    message: function() {
      let id =
        this.$route.params.id != undefined
          ? this.$route.params.id
          : "*** no id ***";
      let pass =
        this.$route.params.pass != undefined
          ? this.$route.params.pass
          : "*** no password ***";
      return "ID:" + id + "<br>PASS:" + pass;
    }
  },
  validate({ params }) {
    if (params.id == undefined || params.pass == undefined) {
      return false;
    }
    return true;
  }
};
</script>

<style>
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-size: 20pt;
}
a {
  font-size: 16pt;
}
.right {
  text-align: right;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
