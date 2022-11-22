<template>
  <div class="big_box">
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

export default {
  name: "WishList",
  components: { 
    AllMovieCard,
  },
     data(){
    return{
      perPage:14,
      currentPage:1,
      movies: [],
    };
  },
  created(){
    this.getWishList()
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

<style scoped>
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
}

.card:hover{
  /* background-color: rgb(133, 140, 194); */
  background-color: #B0A3E9;
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