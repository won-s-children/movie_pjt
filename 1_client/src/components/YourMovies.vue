<template>
  <div>
    <h3>{{ this.$store.state.username }}님의 취향저격 영화</h3>
    <VueSlickCarousel v-bind="settings" v-if="movies.length">
      <div v-for="movie in movies" v-bind:key="movie.id" class="movie-list">
        <SeasonMovieCard
          v-bind:title="movie.title"
          v-bind:posterPath="movie.poster_path"
          v-bind:releaseDate="movie.release_date"
          v-bind:movieId="movie.id"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import axios from "axios";
import SeasonMovieCard from "@/components/SeasonMovieCard.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    SeasonMovieCard,
    VueSlickCarousel,
  },
  data(){
    return{
      movies: [],
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    };
  },
  created(){
    this.getRecommend()
  },
  methods:{
    getRecommend() {
      const URL = 'http://127.0.0.1:8000'
      axios({
        method: 'get',
        url: `${URL}/api/v1/movies/`,
      })
        .then((res) => {
          // 유저가 좋아요한 영화를 파악한다.
          // console.log(res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk)))
          const mymovies = res.data.filter(movie => movie.like_users.includes(this.$store.state.user_pk));

          console.log(mymovies)
          var tmp = {}
          // 유저가 좋아요한 영화의 장르의 수를 구한다.
          mymovies.forEach(movie => {
            var genre = movie.genres[0]
            if(genre in tmp){
              tmp[genre] += 1
            }else{
              tmp[genre] = 1
            }
          });
          // console.log(tmp)
          // 장르의 키값을 배열로 뽑는다.
          var keyList = Object.keys(tmp)
          // console.log(keyList)
          var tastes = []
          // 해당 장르배열을 순회하면서 장르와 값을 객체로 만들고 배열에 저장
          for(let index in keyList){
            let contrib = {
              pk: keyList[index],
              cnt: tmp[keyList[index]]
            }
            tastes.push(contrib)
          }
          console.log(tastes)
          // 값을 기준으로 내림차순정렬
          var sort_tastes = tastes.sort((a,b) => (b.cnt - a.cnt));
          if(sort_tastes.length > 0){
            res.data.forEach(movie => {
                if(movie.genres[0] == sort_tastes[0].pk){
                  this.movies.push(movie)
              }
            })
          }
          if(sort_tastes.length > 1){
            res.data.forEach(movie => {
                if(movie.genres[0] == sort_tastes[1].pk){
                  this.movies.push(movie)
              }
            })
          }
          if(sort_tastes.length > 2){
            res.data.forEach(movie => {
                if(movie.genres[0] == sort_tastes[2].pk){
                  this.movies.push(movie)
              }
            })
          }
          console.log(this.movies)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }


}
</script>

<style>
.movie-list {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>