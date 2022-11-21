<template>
  <div>
    <!-- 영화상세정보 폼 -->
    <div class="detailwrap">
      <img v-bind:src="movieImgURL" alt="movieImg" />
      <div class="card-container">
        <h2 class="text-pad">{{ movie?.title }}</h2>
        <ul class="inforwrap">
          <li class="text-pad">개봉일자: {{ movie?.release_date }}</li>
          <li class="text-pad">평점: {{ movie?.vote_average }}</li>
          <li class="text-pad">유저평점: {{ total_vote }}</li>
          <li class="text-pad"><b-icon icon="heart"></b-icon></li>
          <li><button v-on:click="goYoutube">예고편</button></li>
        </ul>
        <p>{{ movie?.overview }}</p>
      </div>
    </div>
    <!-- 댓글입력 폼 -->
    <div class="reviewSet">
      <input type="number" min="0" max="5" step="1" v-model="user_vote_average">
      <b-col sm="10">
        <b-form-input v-model="content" placeholder="평점과 댓글을 입력해주세요."></b-form-input>
        <!-- <textarea name="" id="" cols="30" rows="2" v-model="content"></textarea> -->
      </b-col>
      <b-button variant="outline-secondary" v-on:click="createReview">등록</b-button>
    </div>
    <!-- 댓글 리뷰리스트 폼 -->
    <b-list-group class="reviewList">
      <b-list-group-item class="review" v-for="(review, index) in reviews" v-bind:key="index">
        <ul>
          <li>{{ review.user.username }}</li>
          <li>{{ review.created_at | moment('YYYY-MM-DD HH:mm:ss')  }}</li>
          <li>{{ review.user_vote_average}}</li>
          <li>{{ review.content}}</li>
        </ul>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  data() {
    return {
      movie: null,
      user_vote_average: 0,
      content: '',
      reviews: null,
    }
  },
  created() {
    this.getMovieDetail()
    this.getMovieReviews()
  },
  computed: {
    movieImgURL() {
      const url = "https://themoviedb.org/t/p/w600_and_h900_bestv2"+this.movie?.poster_path
      return url
    },
    total_vote(){
      const n = this.reviews?.length
      let sum_vote = 0
      if(n === 0){
        return 0
      }
      this.reviews?.forEach(review => {
        sum_vote = sum_vote + review.user_vote_average
      });
      const result = (sum_vote/n).toFixed(1)
      return result
    },
  },
  methods: {
    getMovieReviews(){
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/reviews/`
      })
        .then((res) => {
          const tmp = res.data.filter(review => review.movie.id == this.$route.params.id)
          this.reviews = tmp
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getMovieDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/${this.$route.params.id}/`
      })
        .then((res) => {
          console.log(res.data)
          this.movie = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
   async goYoutube(){
      // const API_KEY = process.env.VUE_APP_TMDB_API_KEY;
      const API_KEY = "d77a958e646191ffe9107d07477129e7";
      const API_URL = "https://api.themoviedb.org/3/movie/"+this.movie?.movie_id+"/videos";
      let key = '';
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: API_KEY,
            language: "ko-KR",
          },
        });
        key = response.data.results[0].key
        console.log(key)
      } catch (error) {
        console.log(error);
      }
      if(key){
        const link = "https://youtube.com/embed/" + key
        window.open(link)
      }else{
        alert("예고편 동영상이 없습니다.")
      }
    },
    async createReview(){
      if(this.content === ''){
        alert("내용을 입력해주세요.")
        return
      }else if(this.user_vote_average <0 || this.user_vote_average > 5){
        alert("평점 범위가 벗어났습니다.")
        return
      }
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/${this.$route.params.id}/comments/`,
        data: {
          user_vote_average: this.user_vote_average,
          content: this.content,
          movie: this.$route.params.id
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
        .then((res) => {
          console.log(res)
          // this.$router.push({ name: 'moviedetail', params: { id: this.$route.params.id }})
          this.$router.go()
          this.user_vote_average = 0
          this.content = ''
        })
        .catch((err) => {
          console.log(err)
        })
      
    },
  }
}
</script>

<style>
.detailwrap{
  display: flex;
  background-color: rgb(221, 235, 245);
}
.detailwrap img{
  height: 500px;
  padding: 20px;
}
.inforwrap{
  display: flex;
  padding: 10px;
}
.text-pad {
  padding-right: 20px;
  font-weight: bold;
}
.form-btn {
  width: 40px;
}
.reviewSet{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
}

.card-container {
  width: 80vw;
  padding: 30px;
  align-items: center;
}
.reviewList {
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
}

.review:hover {
  background-color: rgb(221, 232, 248);
}
</style>