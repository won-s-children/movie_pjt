<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";

export default {
     data(){
    return{
      movies: [],
    };
  },
  created(){
    this.getWishList()
  },
  methods:{
    getWishList() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // 유저가 좋아요한 영화를 파악한다.
          // console.log(res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk)))
          const mymovies = res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk));
          this.movies = mymovies
          console.log(this.movies)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
}
</script>

<style>

</style>