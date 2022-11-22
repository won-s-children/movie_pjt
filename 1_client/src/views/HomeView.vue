<template>
  <div>
    <h3>💜 112의 Home 💜</h3>
    <YourMoviesVue v-if="isLoggedIn"/>
    <hr>
    <RecentMoviesVue />
    <br>
    <hr>
    <LikesMoviesVue />
    <hr>
    <SeasonsMoviesVue />
  </div>
</template>

<script>
import YourMoviesVue from '@/components/YourMovies.vue';
import RecentMoviesVue from '@/components/RecentMovies.vue';
import LikesMoviesVue from '@/components/LikesMovies.vue';
import SeasonsMoviesVue from '@/components/SeasonsMovies.vue';

export default {
  components: { YourMoviesVue, RecentMoviesVue, LikesMoviesVue, SeasonsMoviesVue },
  computed:{
    isLoggedIn() {
      return this.$store.getters.isLogin
    }
  },
  created() {
  },
  methods: {

  }
};
</script>

<style scoped>
h3{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>