<template>
    <b-list-group-item>
      <ul class="review-list">
        <li class="username">{{ review.user.username }}&nbsp;&nbsp;[ {{ review.user_vote_average}}점 ]</li>
        <li class="review-data">{{ review.created_at | moment('YYYY-MM-DD HH:mm:ss')  }} 작성</li>
        <li class="review-content" v-if="flag">{{ review.content }}</li>
      </ul>
      <!-- <b-list-group-item class="reviewSet"> -->
        <div class="change-form">
        <div class="change-form" v-if="!flag">
          <input type="number" min="0" max="5" step="1" v-model="review_vote" class="vote-average">
          <input type="text" v-model="review_content" class="form-control">
        </div>
        <b-button variant="outline-secondary" class="deletebtn" v-on:click="chgUpdate(review.content, review.user_vote_average)" v-show="checkUser(review.user.username)" v-if="flag">수정</b-button>
        <b-button variant="outline-secondary" class="deletebtn" v-on:click="delReview(review.id)" v-show="checkUser(review.user.username)" v-if="flag">삭제</b-button>
        <b-button variant="outline-secondary" class="deletebtn" v-on:click="putReview(review.id)" v-if="!flag">수정 등록</b-button>
        <b-button variant="outline-secondary" class="deletebtn" v-on:click="chgUpdate(null ,0)" v-if="!flag">취소</b-button>
      </div>
        <!-- </b-list-group-item> -->
    </b-list-group-item>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  props: ["review"],
  data(){
    return{
        flag: true,
        review_content: '',
        review_vote: 0,
    }
  },
  computed:{

  },
  methods:{
    chgUpdate(content, vote){
      this.flag = !this.flag
      this.review_content = content
      this.review_vote = vote
    },
    checkUser(username){
      if(username === this.$store.state.username){
        return true
      }
      return false
    },
    delReview(review_pk) {
      axios({
        method: 'DELETE',
        url: `${API_URL}/api/v1/reviews/${review_pk}/`
      })
        .then(() => {
          // console.log(res.data)
          this.$router.go()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async putReview(review_pk){
      if(this.content === ''){
        alert("내용을 입력해주세요.")
        return
      }else if(this.user_vote_average <0 || this.user_vote_average > 5){
        alert("평점 범위가 벗어났습니다.")
        return
      }
      axios({
        method: 'PUT',
        url: `${API_URL}/api/v1/reviews/${review_pk}/`,
        data: {
          user_vote_average: this.review_vote,
          content: this.review_content,
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
        .then(() => {
          // console.log(res)
          // this.$router.push({ name: 'moviedetail', params: { id: this.$route.params.id }})
          this.$router.go()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
.change-form {
  display: flex;
  justify-content: center;
  background-color: white;
}
</style>