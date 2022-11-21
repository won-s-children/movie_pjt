<template>
  <div>
    <img v-bind:src="movieImgURL" alt="movieImg" height="300" />
    <div>{{title}}</div>
    <div>{{overview}}</div>
    <div>{{releaseDate}}</div>
  </div>
</template>

<script>
const imgUrl='https://image.tmdb.org/t/p/w500/'
export default {
  props: ["title", "posterPath", "overview", "releaseDate"],

  computed: {
    movieImgURL() {
      return imgUrl+this.posterPath;
    }
  }
}
</script>

<style>

</style>