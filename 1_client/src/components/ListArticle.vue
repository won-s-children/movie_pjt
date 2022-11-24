<template>
    <ul>
        <li>{{ article.id }}</li>
        <li>{{ article.title }}</li>
        <li>{{ article.user.username }}</li>
        <li>{{ article.created_at | moment('YYYY-MM-DD') }}</li>
        <hr>
    </ul>
    
</template>

<script>
export default {
  props: ["article"],
}
</script>

<style>

</style>