<template>
  <div>
    <div>{{title}}</div>
    <img v-bind:src="movieImgURL" alt="movieImg" height="300" />
    <div>{{overview}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "posterPath", "overview"],
  computed: {
    movieImgURL() {
      return `https://themoviedb.org/t/p/w600_and_h900_bestv2${this.posterPath}`;
    }
  }
}
</script>

<style>

</style>