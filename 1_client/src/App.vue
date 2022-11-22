<template>
  <div id="app">
    <nav v-if="!isLoggedIn">
      <div class="nav-design">
        <div class="nav-left">
          <router-link to="/">Home</router-link>&nbsp;&nbsp;|&nbsp;
          <router-link to="/movie">전체 영화</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/signup">회원가입</router-link>&nbsp;&nbsp;|&nbsp;
          <router-link to="/login">로그인</router-link>
        </div>
      </div>
    </nav>
    <nav v-if="isLoggedIn">
      <div class="nav-design">
        <div class="nav-left">
          <router-link to="/">Home</router-link> |
          <router-link to="/movie">전체 영화</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/wishlist">내가 찜한 영화</router-link> |
          <a v-on:click="logOut" class="text">로그아웃</a>
        </div>
      </div>
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

nav a:hover{
  color:white;
}

nav a.router-link-exact-active {
  color: #f3f7fc;
  background-color: rgb(181, 188, 255);
  
}

.nav-design {
  display: flex;
  justify-content: space-between;
  background-color: rgb(181, 188, 255);
}

.nav-left {
  text-align: left;
  background-color: rgb(181, 188, 255);
}
.nav-right {
  text-align: right;
  background-color: rgb(181, 188, 255);
}

.text {
  /* text-decoration-line: underline; */
  cursor: pointer;
}
</style>
