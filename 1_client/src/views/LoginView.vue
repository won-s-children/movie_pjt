<template>
  <div>
    <h1>💙 로그인 💙</h1>
    <form @submit.prevent="logIn">
      <label for="username">아이디 : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password">비밀번호 : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="로그인">
    </form>
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
#container{
  align-items: center;
  border: 3px solid rgb(244, 15, 15);
}

#username{margin-bottom: 30px;}
#password1{margin-bottom: 30px;}
#password2{margin-bottom: 30px;}
.signupform{
  width:500px; 
  align-content: center;
  text-align: center;
  border: 1px solid #000;
  }


</style>