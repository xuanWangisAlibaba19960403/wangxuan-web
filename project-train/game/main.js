new Vue({
  name: 'game',
  el: '#app',
  template: `<div id="#app">
    <top-bar :players="players" :current-player-index="currentPlayerIndex" :turn="turn"></top-bar>
    <card :def="testCard" @play="handlePlay"></card>
  </div>`,
  data: state,
  computed: {
    testCard() {
      return cards.archers;
    }
  },
  methods: {
    handlePlay() {
      console.log('card_@play_@handlePlay');
    },
    createTestHand() {
      const cards = [];
      const ids = Object.keys(cards);
      for (let i = 0; i < 5; i++) {
        cards.push(testDrawCard());
      }
      return cards;
    },
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});
