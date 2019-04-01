<template>
  <nav class="menu">
    <router-link :to="{ name:'home' }" exact>Home</router-link>
    <router-link :to="{ name:'faq' }">FAQ</router-link>
  </nav>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../assets/css/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>
