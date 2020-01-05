<template>
  <div class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <div>
      <input type="text" v-model="msg" />
      <button @click="doClick">Click</button>
    </div>
    <ul v-for="(data, key) in json_data" :key="key">
      <li>{{data.name}} ({{data.age}}) [{{key}}]</li>
    </ul>
    <!-- <table>
      <tr>
        <th>User ID</th>
        <td>{{json_data.userId}}</td>
      </tr>
      <tr>
        <th>ID</th>
        <td>{{json_data.id}}</td>
      </tr>
      <tr>
        <th>Title</th>
        <td>{{json_data.title}}</td>
      </tr>
      <tr>
        <th>Body</th>
        <td>{{json_data.body}}</td>
      </tr>
    </table>-->
  </div>
</template>

<script>
const axios = require("axios");
// var url = "https://jsonplaceholder.typicode.com/todos/1";
// var url = "https://jsonplaceholder.typicode.com/posts/";
var url = "https://cs8-vue.firebaseio.com/person.json";

export default {
  data: function() {
    return {
      title: "Axios",
      msg: "",
      message: "axios app.",
      json_data: {}
    };
  },
  methods: {
    doClick: function(event) {
      axios
        .get(url + this.msg)
        .then(res => {
          this.message = "get ID=" + this.msg;
          this.json_data = res.data;
        })
        .catch(error => {
          // this.message = error;
          this.message = "ERRROR!";
        });
    }
  }
  // asyncData: async function() {
  //   let id = 1;
  //   let result = await axios.get(url + id);
  //   return {
  //     json_data: result.data
  //   };
  // }
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
div {
  font-size: 14pt;
}

hr {
  margin: 10px 0px;
}
tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-size: 16pt;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
</style>