<template>
  <div>
    <router-link :to="{ name: 'moviedetail', params: { id: movieId } }">
      <img v-bind:src="movieImgURL" alt="movieImg" height="300" />
      <div>{{title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["posterPath", "movieId", "title"],
  computed: {
    movieImgURL() {
      return `https://themoviedb.org/t/p/w600_and_h900_bestv2${this.posterPath}`;
    }
  }
}
</script>

<style>

</style>