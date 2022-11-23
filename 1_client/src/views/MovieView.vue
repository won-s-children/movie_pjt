<template>
  <!-- <div id="container">
    <ul class="box">
      <li v-for="movie in movies" v-bind:key="movie.id">
        <MovieCard class="card"
          v-bind:posterPath="movie.poster_path"
        />
      </li>
    </ul> -->
  <div class="big_box">
    <h3>💜 112 Film의 전체영화 💜</h3>
  <div>
    <div class="overflow-auto">
      <ul class="box">
        <li v-for="perPageMovie in perPageMovies" v-bind:key="perPageMovie.id">
          <AllMovieCard class="card" v-bind:posterPath="perPageMovie.poster_path" 
            v-bind:movieId="perPageMovie.id"
          />
        </li>
      </ul>
        <b-pagination class="pagination"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import AllMovieCard from '@/components/AllMovieCard';
// import Paginate from 'vuejs-paginate';
// Vue.component('paginate', Paginate)

export default {
  name: "MovieView",
  components: { 
    AllMovieCard,
  },

  data() {
    return {
      perPage:14,
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

h3{margin-top:50px;}

.big_box{
  /* border: 3px solid #000; */
  /* background-color: rgb(221, 232, 248); */
  background-color: #ECEEFF;
  text-align: center;
}
#container{
  /* width:100%; */
  /* border: 3px solid rgb(255, 0, 0); */
  /* background-color: rgb(30, 30, 30); */
  /* margin-top:0px; */
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
  padding:20px;
  background-color: #ECEEFF;
  font-size: 0;
  border:0;
}

.card a {
  width:auto;
  padding:0px;
  margin:0px;
  background-color: #fff;

}

.card:hover{
  /* background-color: rgb(133, 140, 194); */
  /* background-color: #B0A3E9; */
}

.box {
  /* border: 3px solid rgb(234, 18, 18); */
  display: grid;
  margin-top: 50px;
  width:100%;
  /* padding: 20px; */
  grid-template-columns: repeat(7, 1fr);
}

.pagination{
  /* border: 3px solid rgb(226, 8, 8); */
  display: flex;
  justify-content: center;
}

</style>