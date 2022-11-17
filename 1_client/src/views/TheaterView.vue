<template>
  <div>
    <h3>영화관을 골라보세요!</h3>
    <ul>
      <li>
        <TheaterCard />
      </li>
    </ul>
    
  </div>
</template>

<script>
import TheaterCard from '@/components/TheaterCard.vue';
export default {
  components: { TheaterCard },
};

</script>

<style scoped>
</style>
