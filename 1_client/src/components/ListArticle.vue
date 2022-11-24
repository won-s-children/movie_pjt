<template>
  <div>
    <ul class="article-wrap">
        <li class="article-id">{{ article.id }}</li>
        <li class="article-title">{{ article.title }}</li>
        <li class="article-who">{{ article.user.username }}</li>
        <li class="article-date">{{ article.created_at | moment('YYYY-MM-DD') }}</li>
    </ul>
    <hr>
  </div>
    
</template>

<script>
export default {
  props: ["article"],
}
</script>

<style>
hr{
  display: inline-block;
  width: 90%;
}

.article-wrap{
  display: flex;
  /* justify-content: space-around; */
  /* border: 1px solid rgb(180, 180, 180); */
  /* border-bottom: 1px solid rgb(180, 180, 180); */
  /* padding-bottom:20px; */
  padding: 10px 0 5px 0;
}

.article-id{
  width:27%;
  /* border: 1px solid #000; */
}
.article-title{
  width:19%;
/* border: 1px solid #000; */
}

.article-who{
  width:27%;
/* border: 1px solid #000; */
}

.article-date{
  width:27%;
/* border: 1px solid #000; */
}

</style>