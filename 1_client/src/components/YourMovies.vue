<template>
  <div>
    <h3>{{ this.$store.state.username }} 님이 좋아하는 영화</h3>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('saveUserInfo', this.$store.state.token)
  }

}
</script>

<style>

</style>