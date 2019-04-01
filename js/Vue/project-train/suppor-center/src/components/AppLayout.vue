<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/img/logo.svg" />
        <div>My shirt shop</div>
      </div>
    </header>
    <NavMenu />
    <!-- 组件切换 -->
    <router-view />
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'

export default {
  data() {
    return {

    };
  },
  components: {
    NavMenu,
  },
}
</script>

<style lang="stylus">
@import '../assets/css/main'
</style>

<style lang="stylus" scoped>
.header {
  .img {
    height: 64px;
    width: 64px;
  }
}
</style>
