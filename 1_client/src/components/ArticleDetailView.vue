<template>
  <div>
    <ul>
        <li>제목: {{article.title}}</li>
        <li>작성자: {{article.user.username}}</li>
        <li>작성일: {{article.created_at | moment('YYYY-MM-DD')}}</li>
        <li><p>{{ article.content }}</p></li>
    </ul>
    <b-button variant="outline-secondary" class="deletebtn" v-on:click="delArticle(article.id)" v-show="checkUser(article.user.username)" v-if="flag">삭제</b-button>

  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
    data(){
        return{
            article: null,
            reviews: null,
            flag: true,
        }
    },
    created() {
        this.getArticleDetail();
        // this.getArticleReviews();
    },
    computed:{
        isLoggedIn() {
        return this.$store.getters.isLogin;
        }
    },
    methods:{
        checkUser(username){
            if(username === this.$store.state.username){
                return true
            }
            return false
        },
        getArticleDetail() {
        axios({
            method: "get",
            url: `${API_URL}/api/v1/community/articles/${this.$route.params.id}/`,
        })
            .then((res) => {
            console.log(res.data);
            this.article = res.data;
            })
            .catch((err) => {
            console.log(err);
            });
        },
        // getArticleReviews() {
        // axios({
        //     method: "get",
        //     url: `${API_URL}/api/v1/community/comments/`,
        // })
        //     .then((res) => {
        //     console.log(res.data)
        //     const tmp = res.data.filter(
        //         (review) => review.article == this.$route.params.id
        //     );
        //     this.reviews = tmp;
        //     // console.log(this.reviews)
        //     })
        //     .catch((err) => {
        //     console.log(err);
        //     });
        // },
    }
}
</script>

<style>

</style>