<template>
  <div>
    <h3 v-if="isLoggedIn">💜 {{ this.$store.state.username }}님의 Home 💜</h3>
    <h3 v-else>💜 Welcome To 112 Film 💜</h3>
    <img src="..\src\assets\112.png" height="150" class="logo_img">
    <br>
    <YourMoviesVue v-if="isLoggedIn"/>
    <br>
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

hr{
  margin-top: 40px;
  margin-bottom: 40px;
}

h3{
  margin-top: 30px;
  margin-bottom: 30px;
}

@keyframes logo112 {
	from {
		transform: translate(-200px, 0px);
	}
	to {
		transform: translate(0px,0px);
	}
}

.logo_img{
  animation: logo112 2s linear forwards;
  margin-bottom : 30px;
}
</style>