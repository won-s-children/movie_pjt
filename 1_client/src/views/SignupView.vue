<template>
  <div id="big_cont">
    <div id="container">
      <h1>💜 회원가입 💜</h1>
      <form @submit.prevent="signUp">
        <label for="username">아이디</label><br />
        <input type="text" id="username" v-model="username" /><br />

        <label for="password1">비밀번호</label><br />
        <input type="password" id="password1" v-model="password1" /><br />

        <label for="password2">비밀번호 확인</label><br />
        <input type="password" id="password2" v-model="password2" /><br />

        <!-- <input type="submit" value="회원가입"> -->
        <b-button variant="light" type="submit">회원가입</b-button>
      </form>
    </div>
  </div>

</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "SignUpView",
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    };
  },
  methods: {
    signUp() {
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;

      const payload = {
        username: username,
        password1: password1,
        password2: password2,
      };
      if (password1 !== password2) {
        Swal.fire("비밀번호가 일치하지 않습니다.")
      } else {
        this.$store.dispatch("signUp", payload);
      }
    },
  },
};
</script>

<style scoped>
#big_cont {
  /* border: 1px solid #000; */
  display: flex;
  justify-content: center;
}

#container {
  margin-top: 50px;
  align-items: center;
  border: 3px solid rgb(196, 186, 204);
  border-radius: 30px;
  width: 400px;
  padding-bottom: 30px;
}

h1 {
  margin-top: 30px;
  margin-bottom: 40px;
}

label {
  font-weight: 500;
  margin-bottom: 8px;
}

#username {
  margin-bottom: 40px;
  border-radius: 5px;
}
#password1 {
  margin-bottom: 40px;
  border-radius: 5px;
}
#password2 {
  margin-bottom: 40px;
  border-radius: 5px;
}
</style>
<style>
#swal2-title {
  color:rgb(75, 82, 92);
  background-color:rgb(190, 217, 240);
}
</style>