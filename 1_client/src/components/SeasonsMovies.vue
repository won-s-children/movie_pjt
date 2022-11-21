<template>
  <div>
    <h3>지금 봐야하는 영화</h3>
    <p>겨울에 핫초코 마시면서 볼 영화는?! ❄</p>
    <ul class="slider">
      <div class="slides">
        <li v-for="movie in seasonsmovies" v-bind:key="movie.id">
          <SeasonMovieCard
            v-bind:posterPath="movie.poster_path"
            v-bind:movieId="movie.id"
          />
        </li>
      </div>
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