<template>
  <div>
    <ul>
        <li>제목: <input type="text" v-model="title"></li>
        <li>
            <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요." v-model="content"></textarea>
        </li>
    </ul>
    <button v-on:click="createArticle">등록</button>
    <button v-on:click="goArticleList">취소</button>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
const API_URL = "http://127.0.0.1:8000";

export default {

  data(){
    return{
      title: '',
      content: '',
    }
  },
  methods:{
    goArticleList(){
      this.$router.push({ name: 'community' })
    },
    async createArticle() {
      if (this.content === "") {
        Swal.fire("내용을 입력해주세요.");
        return;
      } else if (this.title === "") {
        Swal.fire("제목을 입력해주세요.");
        return;
      }
      axios({
        method: "post",
        url: `${API_URL}/api/v1/community/articles/`,
        data: {
          title: this.title,
          content: this.content,
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then(() => {
          this.$router.push({ name: 'community'})
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
}
</script>

<style>

</style>