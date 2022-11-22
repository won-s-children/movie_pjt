<template>
  <div>
    <h3>좋아요 많은 영화</h3>
    <p>많은 사람들이 좋아하는 영화를 알아보세요!</p>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      movies:[]
    }
  },
  created() {
    this.getManyLikeMovies();
  },
  computed: {},
  methods: {
    getManyLikeMovies() {
      const URL = "http://127.0.0.1:8000";
      axios({
        method: "get",
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // console.log(res.data.filter(movie => movie.season === "겨울" || movie.genres[0] === 10751))
          this.movies = res.data.sort((a,b) => (b.like_users.length - a.like_users.length));
          console.log(this.movies)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>

<style>

</style>