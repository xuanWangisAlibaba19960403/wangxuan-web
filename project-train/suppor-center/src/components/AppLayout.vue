<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/img/logo.svg" />
        <div>My shirt shop</div>
      </div>
    </header>
    <!-- 组件切换 -->
    <router-view />
  </div>
</template>

<script>
export default {

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
