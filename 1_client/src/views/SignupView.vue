<template>
  <div id="container">
    <h1>💜 회원가입 💜</h1>
    <form @submit.prevent="signUp" class="signupform">
      <label for="username">아이디 : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1">비밀번호 : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2">비밀번호 확인 : </label>
      <input type="password" id="password2" v-model="password2"><br>
      
      <input type="submit" value="회원가입">
    </form>

    <b-container fluid>
  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-none">No State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-valid">Valid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-invalid">Invalid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username: username,
        password1: password1,
        password2: password2,
      }
      if(password1 !== password2){
        alert("비밀번호가 서로 일치하지 않습니다.")
      }else{
        this.$store.dispatch('signUp', payload)
      }

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