<template>
  <div>
    <h1>커뮤니티 리스트 입니다.</h1>
    <ul class="articleTitleWrap">
        <li class="articleId">번호</li>
        <li class="articleTitle">제목</li>
        <li class="articleUser">작성자</li>
        <li class="articleCreate">작성일</li>
    </ul>

    <hr>

    <ListArticle
        v-for="(article, index) in articles"
        v-bind:key="index"
        v-bind:article="article"
    />
    
    <button>작성</button>
  </div>
</template>

<script>
import axios from "axios";
import ListArticle from '@/components/ListArticle';


export default {
    components: {
        ListArticle,
    },
    data(){
        return{
            articles: [],
        }
    },
    created(){
        this.getArticles();
    },
    methods:{
      getArticles() {
        const URL = "http://127.0.0.1:8000";
        axios({
            method: "get",
            url: `${URL}/api/v1/community/articles/`,
        })
            .then((res) => {
                // console.log(res.data.filter(movie => movie.season === "겨울" || movie.genres[0] === 10751))
                console.log(res.data)
                this.articles = res.data
            })
            .catch((err) => {
            console.log(err);
            });
        },
    }
}
</script>

<style>
    .articleTitleWrap{
        display: flex;
    }
    .articleId{
        width: 10%;
    }
    .articleTitle{
        width: 70;
    }
    .articleUser{
        width: 10%;
    }
    .articleCreate{
        width: 10%;
    }
</style>