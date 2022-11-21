<template>
  <!-- <div id="container">
    <ul class="box">
      <li v-for="movie in movies" v-bind:key="movie.id">
        <MovieCard class="card"
          v-bind:posterPath="movie.poster_path"
        />
      </li>
    </ul> -->
  <div class="home">
    <div class="overflow-auto">
      <!-- <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination> -->
      <ul class="box">
        <li v-for="perPageMovie in perPageMovies" v-bind:key="perPageMovie.id">
          <MovieCard class="card" v-bind:posterPath="perPageMovie.poster_path" />
        </li>
      </ul>
        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>

<!-- <div>
      현재 선택된 페이지 : {{selectPage}}
      <paginate
          :page-count="pageCount"
          :page-range="3"
          :margin-pages="2"
          :click-handler="changePage"
          :prev-text="'prev'"
          :next-text="'next'"
          :container-class="'pagination'"
          :page-class="'page-item'">
      </paginate>
  </div> -->


    <!-- <div class="overflow-auto"> -->

    <!-- <b-table
      id="poster_path"
      :items="movies"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="movie_id"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p> -->
    
  <!-- </div> -->

  <!-- </div> -->
</template>

<script>
import axios from "axios";
import MovieCard from '@/components/MovieCard';
// import Paginate from 'vuejs-paginate';
// Vue.component('paginate', Paginate)

export default {
  name: "MovieView",
  components: { 
    MovieCard,
  },

  data() {
    return {
      perPage:12,
      currentPage:1,
      // selectPage: 1,
      // pageCount: 20,
      // movies: [],
    }
  },

  computed: {
    movies() {
      return this.$store.state.movies;
    },
    perPageMovies() {
      const newMovies = this.movies.slice(
        this.perPage * this.currentPage - this.perPage,
        this.perPage * this.currentPage
      );
      return newMovies;
    },
    rows() {
      return this.movies.length;
    },
    // rows() {
    //   return this.movies.length
    // }
  },

  created() {
    this.$store.dispatch("getMovies");
    // this.getMovies()
  },
  methods: {
    // changePage: function (pageNum) {
    //             this.selectPage = pageNum
    //         },
    getMovies() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          console.log(res.data)
          this.movies = res.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
 
  // async created() {
  //   const API_KEY = process.env.VUE_APP_API_KEY;
  //   const API_URL = process.env.VUE_APP_API_URL;

  //   try {
  //     const response = await axios.get(API_URL, {
  //       params: {
  //         api_key: API_KEY,
  //         language: "ko-KR",
  //       }
  //     });
  //     this.movies = response.data.results;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
}
</script>


<style scoped>
#container{
  width:100%;
  /* border: 3px solid rgb(255, 0, 0); */
  background-color: rgb(30, 30, 30);
  margin-top:0px;
}
.card {
  /* border: 1px solid #000; */
  /* width: 70%; */
  /* align-content: center; */
  /* margin: 0 auto; */
  /* margin-top: 60px; */
  /* border-radius: 50px; */
  /* border: 1px solid #000; */
  margin-bottom: 50px;
  padding-top:20px;
  padding-bottom:20px;
}

.card:hover{
  background-color: rgb(253, 220, 143);
}

.box {
  /* border: 3px solid rgb(234, 18, 18); */
  display: grid;
  margin-top: 50px;
  /* padding: 20px; */
  grid-template-columns: repeat(6, 1fr);
}
</style>