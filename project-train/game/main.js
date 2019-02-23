new Vue({
  name: 'game',
  el: '#app',
  template: `<div id="#app">
    <top-bar :players="players" :current-player-index="currentPlayerIndex" :turn="turn"></top-bar>
    <transition name="hand">
      <hand :cards="testHand" v-if="!activeOverly" @card-play="handlePlayCard"></hand>
    </transition>
  </div>`,
  data: state,
  computed: {
  },
  methods: {
    handlePlayCard(card) {
      console.log('card_@play_@handlePlay');
    },
    createTestHand() {
      const cards = [];
      const ids = Object.keys(cards);
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDrawCard());
      }
      return cards;
    },
    testDrawCard() {
      const ids = Object.keys(cards);
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      return {
        uid: cardUid++,
        id: randomId,
        def: cards[randomId],
      }
    }
  },
  created() {
    this.testHand = this.createTestHand(); 
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});
