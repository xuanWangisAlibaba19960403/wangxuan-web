new Vue({
  name: 'game',
  el: '#app',
  template: `<div id="#app" :class="cssClass">
    <top-bar :players="players" :current-player-index="currentPlayerIndex" :turn="turn"></top-bar>
    <div class="world">
      <castle v-for="(player, index) in players"
        :player="player" :index="index" />
      <div class="land"></div>
      <cloud v-for="index in 10" :type="(index -1) % 5 + 1" />
    </div>
    <transition name="hand">
      <hand :cards="currentHand" v-if="!activeOverly"
        @card-play="handlePlayCard" @card-leave-end="handleCardLeaveEnd" />
    </transition>
    <transition name="zoom">
      <overlay v-if="activeOverlay" :key="activeOverlay"
        @close="handleOverlayClose">
        <component :is="'overlay-content' + activeOverlay"
          :player="currentPlayer" :oppent="currentOpponent"
          :players="players" />
      </overlay>
    </transition>
    <transition name="zoom">
      <div class="overlay-background" v-if="activeOverlay" />
    </transition>    
  </div>`,
  data: state,
  computed: {
    foodRatio() {
      return this.player.food / maxFood;
    },
    healthRatio() {
      return this.player.health / maxHealth;
    },
    cssClass() {
      return {
        'can-play': this.canPlay
      }
    }
  },
  methods: {
    handlePlayCard(card) {
      playCard(card);
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
    },
    handleCardLeaveEnd() {
      applyCard();
    },
    handleOverlayClose() {
      overlayCloseHandlers[this.activeOverlay]();
    }
  },
  mounted() {
    beginGame();
  },
})

window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio();
});

requestAnimationFrame(animate);

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

function playCard(card) {
  if (state.canPlay) {
    state.canPlay = false;
    currentPlayingCard = card;

    // 将卡牌从玩家手牌中移除
    const index = state.currentPlayer.hand.indexOf(card);
    state.currentPlayer.hand.splice(index, 1);
    // 将卡牌放到弃牌堆中
    addCardToPile(state.discardPile, card.id);
  }
}

function applyCard() {
  const card = currentPlayingCard;
  applyCardEffect(card);
  setTimeout(() => {
    state.players.forEach(checkPlayerLost);
    if (isOnePlayerDead) {
      endGame();
    } else {
      nextTurn();
    }
  }, 700);
}

function endGame() {
  state.activeOverlay = 'game-over';
  if (state.currentPlayer.skipTurn) {
    skipTurn()
  } else {
    startTurn();
  }
}

function nextTurn() {
  state.turn++;
  state.currentPlayerIndex = state.currentOpponentId;
  state.activeOverlay = 'player-turn';
}

function skipTurn() {
  state.currentPlayer.skippedTurn = true;
  state.currentPlayer.skipTurn = false;
  nextTurn();
}

function startTurn() {
  state.currentPlayer.skippedTurn = false; 
  // 如果两名玩家都进行过一回合
  if (state.turn > 2) {
    setTimeout(() => {
      state.currentPlayer.hand.push(drawCard());
      state.canPlay = true;
    }, 800);
  } else {
    state.canPlay = true;
  }
}

const overlayCloseHandlers = {
  'player-turn' () {
    if (state.turn > 1) {
      state.activeOverlay = 'last-play';
    } else {
      newTurn();
    }
  },
  'last-play' () {
    newTurn();
  },
  'game-over' () {
    // 重新加载游戏
    document.location.reload();
  }
}
