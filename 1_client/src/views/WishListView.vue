<template>
  <div class="big_box">
    <h3>π {{ this.$store.state.username }}λμ΄ μ°ν μν π</h3>
  <div>
    <div class="overflow-auto">
      <ul class="box" v-if="flag">
        <li v-for="perPageMovie in perPageMovies" v-bind:key="perPageMovie.id">
          <AllMovieCard class="card" v-bind:posterPath="perPageMovie.poster_path" 
            v-bind:movieId="perPageMovie.id"
          />
        </li>
      </ul>
      <p v-else>μ°ν μνκ° μμ΅λλ€.<br> κ΄μ¬μλ μνμ μ’μμλ₯Ό λλ¬μ£ΌμΈμ π</p>
        <b-pagination v-if="flag" class="pagination"
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

export default {
  name: "WishList",
  components: { 
    AllMovieCard,
  },
     data(){
    return{
      flag: false,
      perPage:14,
      currentPage:1,
      movies: [],
    };
  },
  created(){
    this.getWishList()
    this.$store.dispatch('saveUserInfo', this.$store.state.token)
    this.isFlag()
  },
  computed:{
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
  },
  methods:{
    getWishList() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // μ μ κ° μ’μμν μνλ₯Ό νμνλ€.
          // console.log(res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk)))
          const mymovies = res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk));
          this.movies = mymovies
          console.log(this.movies)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    isFlag() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // μ μ κ° μ’μμν μνλ₯Ό νμνλ€.
          // console.log(res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk)))
          const mymovies = res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk));
          if(mymovies.length !== 0){
            this.flag = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
h3{margin-top:50px;}

.big_box{
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

p{
  margin-top:50px;
  margin-bottom: 70px;
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
  /* padding-top:20px;
  padding-bottom:20px; */
  padding:20px;
  border:0;
  background-color: #ECEEFF;
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

::v-deep .pagination  .page-link {
      background: rgb(221, 224, 255) ;
      color: black;
      /* border: #bdbdbd 1px solid; */
    }
::v-deep .pagination .active button{
      background: #a89be2;
      color: white;
      border: white;
    }

</style>