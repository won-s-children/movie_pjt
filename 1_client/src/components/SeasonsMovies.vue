<template>
  <div>
    <h3>지금 봐야하는 영화</h3>
    <p>겨울에 핫초코 마시면서 볼 영화는?! ❄</p>
    <ul class="box">
      <li v-for="movie in seasonsmovies" v-bind:key="movie.id">
        <SeasonMovieCard class="card"
          v-bind:posterPath="movie.poster_path"
          v-bind:movieId="movie.id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import SeasonMovieCard from '@/components/SeasonMovieCard.vue';

export default {
  components: { 
    SeasonMovieCard 
  },
  data(){
    return{
      seasonsmovies: [],
    }
  },
  created(){
    this.getSeasonMovies()
  },
  computed: {

  },
  methods:{
    getSeasonMovies() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // console.log(res.data.filter(movie => movie.season === "겨울" || movie.genres[0] === 10751))
          this.seasonsmovies = res.data.filter(movie => movie.season === "겨울" || movie.genres[0] === 10751)
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