new Vue({
  name: 'game',
  el: '#app',
  data: state,
  computed: {
    testCard() {
      return cards.archers;
    }
  },
  methods: {
    handlePlay() {
      console.log('are you ok ?');
    }
  },
  mounted() {
    console.log(this.$data === state);
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});
