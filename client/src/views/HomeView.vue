<template>
  <div class="home">
    <h1>home</h1>
    <button v-on:click="test">axios 테스트</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async test() {
      const URL = "http://localhost:8000/api/v1/";
      try {
        const response = await axios.get(URL + "articles");
        if (response.data) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>