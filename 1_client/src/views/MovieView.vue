<template>
  <div>
    <ul class="box">
      <li v-for="movie in movies" v-bind:key="movie.id">
        <MovieCard class="card"
          v-bind:title="movie.title"
          v-bind:posterPath="movie.poster_path"
          v-bind:overview="movie.overview"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from '@/components/MovieCard';
export default {
  components: { MovieCard },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    const API_KEY = process.env.VUE_APP_API_KEY;
    const API_URL = process.env.VUE_APP_API_URL;

    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY,
          language: "ko-KR",
        }
      });
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.card {

  width: 50%;
  align-content: center;
  margin: 0 auto;
}

.box {
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
}
</style>