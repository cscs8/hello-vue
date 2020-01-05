<template>
  <div class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <div>
      <input type="text" v-model="find" />
      <button @click="getData">Click</button>
    </div>
    <ul>
      <li>{{json_data}}</li>
    </ul>
    <!-- <ul v-for="(data, key) in json_data" :key="key">
      <li>{{data.name}} ({{data.age}}) [{{key}}]</li>
    </ul>-->
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
// orderBy="$key"&equalTo=";
var url =
  "https://cs8-vue.firebaseio.com/person.json?orderBy=%22$key%22&equalTo=%22";

export default {
  data: function() {
    return {
      title: "Axios",
      find: "",
      // msg: "",
      message: "axios app.",
      json_data: {}
    };
  },
  methods: {
    getData: function(event) {
      let id_url = url + this.find + "%22";
      axios
        .get(id_url)
        .then(res => {
          this.message = "get ID=" + this.find;
          this.json_data = res.data;
        })
        .catch(error => {
          // this.message = error;
          this.message = "ERRROR!";
          this.json_data = {};
        });
    }
    // doClick: function(event) {
    //   axios
    //     .get(url + this.msg)
    //     .then(res => {
    //       this.message = "get ID=" + this.msg;
    //       this.json_data = res.data;
    //     })
    //     .catch(error => {
    //       // this.message = error;
    //       this.message = "ERRROR!";
    //     });
    // }
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