new Vue({
  name: 'game',
  el: '#app',
  data: state,
  mounted() {
    console.log(this.$data === state);
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});
