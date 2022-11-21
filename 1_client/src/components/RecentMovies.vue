<template>
  <div>
    <h3>현재 상영중인 영화</h3>
    <ul class="slider">
      <div class="slides">
        <li v-for="movie in movies" v-bind:key="movie.id">
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
.card {

  width: 50%;
  align-content: center;
  margin: 0 auto;
}

.box {
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

* {
    box-sizing: border-box;
  }
  .slider {
    width: 100vw;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .slides {
    display: flex;
    overflow-x: auto;
    /* overflow: hidden; */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: #02010150;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    margin-right: 50px;
    border-radius: 10px;
    overflow: hidden;

    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  
  .author-info {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 1rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
  }
  .author-info a {
    color: white;
  }
  .title-font{
    font-size:40px;
  }
  
</style>