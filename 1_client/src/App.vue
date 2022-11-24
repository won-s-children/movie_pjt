<template>
  <div id="app">
    <nav v-if="!isLoggedIn">
      <div class="nav-design">
        <div class="nav-left">
          <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <router-link to="/movie">전체 영화</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <!-- 커뮤니티 추가부분 -->
          <router-link to="/community">자유게시판</router-link>
          <!-- <a href="http://localhost:8080/" class="logo-img"><img src="../src/assets/logo.png"></a> -->
          <!-- <router-link to="/"><a href="#" class="logo-img"><img src="../src/assets/logo.png"></a></router-link> -->
        </div>

        <div class="logoimg-wrap"><a href="http://localhost:8080/" class="logo-img"><img src="../src/assets/logo.png"></a></div>

        <div class="nav-right">
          <router-link to="/community" class="hidden">자유게시판</router-link>
          <router-link to="/signup">회원가입</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <router-link to="/login">로그인</router-link>
        </div>
      </div>
    </nav>

    <nav v-if="isLoggedIn">
      <div class="nav-design">
        <div class="nav-left">
          <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <router-link to="/movie">전체 영화</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
          <!-- 커뮤니티 추가부분 -->
          <router-link to="/community">자유게시판</router-link>
          <!-- <a href="http://localhost:8080/" class="logo-img"><img src="../src/assets/logo.png"></a> -->
        </div>

        <div class="logoimg-wrap"><a href="http://localhost:8080/" class="logo-img"><img src="../src/assets/logo.png"></a></div>

        <div class="nav-right">
          <router-link to="/community" class="hidden">자유게시판</router-link>
          <router-link to="/wishlist">내가 찜한 영화</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a v-on:click="logOut" class="text">로그아웃</a>
        </div>
      </div>
    </nav>
    <router-view/>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainFooter from './layout/MainFooter';
export default {
  components: {
    MainFooter,
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
  /* font-family: 'Nanum Gothic', sans-serif; */
  /* font-family: 'PT Sans', sans-serif; */
  /* font-family: 'Cabin', sans-serif; */
  /* font-family: 'Noto Sans KR', sans-serif; */
  /* font-family: 'Gowun Dodum', sans-serif; */
  font-family: 'IBM Plex Sans KR', sans-serif;
  background-color: #ECEEFF;
}
nav {
  padding: 15px 30px 15px 30px;
  /* background-color: rgb(151, 206, 231); */
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
  text-align: center;
  /* margin-bottom:30px; */
  
}

nav a {
  font-weight: bold;
  color: #1b2c3d;
  /* text-decoration-line: underline; */
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
  text-decoration: none;
  
}

nav a:hover{
  color:white;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
  font-weight: bold;
  
}

.nav-design {
  display: flex;
  justify-content: space-between;
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
}

.nav-left {
  text-align: left;
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
  color:#371b3d;
  margin-top:15px;
}
.nav-right {
  text-align: right;
  background-color: rgb(181, 188, 255);
  /* background-color: rgb(220, 195, 252); */
  color:#371b3d;
  margin-top:15px;
}

.text {
  /* text-decoration-line: underline; */
  cursor: pointer;
}

.logo-img{
  /* display: flex; */
  justify-content: center;
}

.logo-img img{
  /* display: inline-block; */
  width:100px; 
  /* margin-left: 750px; */
}

.logoimg-wrap{
  background-color: rgb(181, 188, 255);
}

Footer{

}

.hidden{
  visibility: hidden;
}
</style>
