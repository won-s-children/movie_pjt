<template>
  <div id="app">
    <nav v-if="!isLoggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">전체 영화</router-link> |
      <router-link to="/theater">영화관 소식</router-link> |
      <router-link to="/signup">회원가입</router-link> | 
      <router-link to="/login">로그인</router-link>
    </nav>
    <nav v-if="isLoggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">전체 영화</router-link> |
      <router-link to="/wishlist">내가 찜한 영화</router-link> |
      <router-link to="/theater">영화관 소식</router-link> |
      <a v-on:click="logOut" class="text">로그아웃</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed:{
    isLoggedIn() {
      return this.$store.getters.isLogin
    }
  },
  created() {
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style>
* {
  list-style: none;
  padding-left: 0;
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: #ECEEFF;
}
nav {
  padding: 25px;
  /* background-color: rgb(151, 206, 231); */
  background-color: rgb(181, 188, 255);
  text-align: center;
  /* margin-bottom:30px; */
  
}

nav a {
  font-weight: bold;
  color: #1b2c3d;
  /* text-decoration-line: underline; */
  background-color: rgb(181, 188, 255);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #f3f7fc;
  background-color: rgb(181, 188, 255);
  
}

.text {
  /* text-decoration-line: underline; */
  cursor: pointer;
}
</style>
