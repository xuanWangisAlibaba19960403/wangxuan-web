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
        // 卡牌唯一标识
        uid: cardUid++,
        // 定义id
        id: randomId,
        // 定义对象
        def: cards[randomId],
      };
    },
    testPlayCard(card) {
      console.log('testPlayCard');
      const index = this.testHand.indexOf(card);
      this.testHand.splice(index, 1);
    }
  },
  created() {
    this.testHand = this.createTestHand();
  },
  mounted() {
    console.log(this.$data === state);
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});
