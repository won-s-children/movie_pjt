<template>
  <div id="big_cont">
  <div id="container">
    <h1>💙 로그인 💙</h1>
    <form @submit.prevent="logIn">
      <label for="username">아이디</label><br>
      <!-- <input type="text" id="username" v-model="username"><br> -->
      <b-form-input placeholder="Enter your Username" id="username" v-model="username"></b-form-input><br>

      <label for="password">비밀번호</label><br>
      <!-- <input type="password" id="password" v-model="password"><br> -->
      <b-form-input type="password" placeholder="Enter your Password" id="password" v-model="password"></b-form-input><br>

      <!-- <input type="submit" value="로그인"> -->
      <!-- <b-button variant="outline-secondary">로그인</b-button>
      <b-button variant="outline-info">로그인</b-button>
      <b-button variant="info">로그인</b-button> -->
      <b-button variant="light" type="submit">로그인</b-button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    logIn() {
      const username = this.username
      const password = this.password

      const payload = {
        username: username,
        password: password,
      }
      this.$store.dispatch('logIn', payload)
    }
  }
}
</script>


<style scoped>

#big_cont{
  /* border: 3px solid rgb(231, 15, 15); */
  display: flex;
  justify-content: center;
  margin-top:20px;
}

#container{
  /* border: 3px solid rgb(244, 15, 15); */
  margin-top: 50px;
  align-items: center;
  border: 2px solid rgb(196, 186, 204);
  /* border: 3px solid #fff; */
  background-color: #fff;
  border-radius: 30px;
  width:400px;
  padding-top: 30px;
  padding-bottom: 60px;
}

h1{
  margin-top: 30px;
  margin-bottom: 40px;
  background-color: #fff;
}

label{
  font-weight: 500;
  margin-bottom: 8px;
  background-color: #fff;
}

form{
  background-color: #fff;
}


#username{margin-bottom: 40px; border-radius: 5px; background-color: #fff;}
#password{margin-bottom: 40px; border-radius: 5px; background-color: #fff;}
.form-control{
  display: inline-block;
  width:200px;
  background-color: #fff;
}
</style>