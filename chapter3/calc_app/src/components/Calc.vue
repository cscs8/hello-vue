<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <div>
      <div>
        <textarea v-model="fomula" cols="40" row="5"></textarea>
      </div>
      <button v-on:click="doAction">CALC</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "Enter expression:",
      fomula: "0"
    };
  },
  methods: {
    doAction: function() {
      var arr = this.fomula.trim().split("\n");
      var last = arr.pop();
      var fn = "";
      for (var n in arr) {
        if (arr[n].trim() != "") {
          fn += "var " + arr[n] + ";";
        }
      }
      fn += "return " + last + ";";
      var exp = "function f(){" + fn + "} f();";
      var ans = eval(exp);
      this.message = "answer: " + ans;

      var re = arr.join(";").trim();
      if (re != "") {
        re += ";";
      }
      re += last;
      this.$emit("result-event", re, ans);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
h1 {
  font-size: 72pt;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}
p {
  margin: 0px;
  color: #666;
  font-size: 16pt;
}
</style>
