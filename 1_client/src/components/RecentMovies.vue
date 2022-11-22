<template>
  <div>
    <h3>현재 상영중인 영화</h3>
    <ul class="slider">
      <div class="slides">
        <li v-for="movie in movies" v-bind:key="movie.id" class="movie-list">
          <MovieCard
            v-bind:title="movie.title"
            v-bind:posterPath="movie.poster_path"
            v-bind:releaseDate="movie.release_date"
          />
        </li>
      </div>
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
* {
    box-sizing: border-box;
  }
  h3{
    margin-top: 30px;
    margin-bottom:40px;
  }
  .slider {
    width: 100vw;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .slides {
    display: flex;
    overflow: auto;
  }
  .slides::-webkit-scrollbar {
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: #02010150;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background-color: white;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    margin-right: 30px;
    scroll-padding-right: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .movie-list{
    margin-bottom:30px;
  }
</style>