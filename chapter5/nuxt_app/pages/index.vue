<template>
  <div class="container">
    <logo />
    <h1 class="title">{{ title }}</h1>
    <p>{{$store.state.message}}</p>
    <p>{{ message }}</p>
    <hr />
    <div class="link" @click.exact="$store.commit('count')" @click.ctrl="$store.commit('reset')">
      <a>clicked: {{ $store.state.counter }}</a>
    </div>
    <router-link to="/other">Go to Other</router-link>
    <pre>[{{now}}]</pre>
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
      title: "Hello",
      message: "this is message.",
      now: "wait..."
    };
  },
  created: function() {
    setInterval(() => {
      var d = new Date();
      this.now =
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds() +
        "." +
        d.getMilliseconds();
    }, 1000);
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
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}
hr {
  margin: 10px 0px;
}
a {
  font-size: 16pt;
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

.link {
  background-color: #def;
  padding: 10px;
}
.links {
  padding-top: 15px;
}
</style>
