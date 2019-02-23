Vue.component('top-bar', {
  template: `<div class="top-bar" :class="'player-' + currentPlayerIndex">
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <img class="arrow" src="svg/turn.svg" />
      <div class="turn">Turn {{ turn }}</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>`,
  props: ['players', 'currentPlayerIndex', 'turn'],
  created () {
    console.log(this.players, this.currentPlayerIndex, this.turn)
  },
})

Vue.component('card', {
  template: `<div class="card" :class="'type-' + def.type" @click="play">
    <div class="title">{{ def.title }}</div>
    <img class="separator" src="svg/card-separator.svg" />
    <div class="description">
      <div v-html="def.description"></div>
    </div>
    <div class="note" v-if="def.note">
      <div v-html="def.note"></div>
    </div>
  </div>`,
  props: ['def'],
  methods: {
    play() {
      this.$emit('play')
    },
  },
})

Vue.component('hand', {
  template: `<div class="hand" @click="handlePlay">
    <div class="wrapper">
      <transition-group name="card" tag="div" class="cards">
        <card v-for="card of cards" :key="card.uid" :def="card.def" @play="handlePlay(card)" />
      </transition-group>
    </div>
  </div>`,
  props: ['cards'],
  methods: {
    // handlePlay(card) {
    //   console.log(1);
    //   this.$emit('card-play', card)
    // },
    handlePlay() {
      console.log(1);
      this.$emit('card-play', 1)
    },
  },
})

Vue.component('overlay', {
  template: `<div class="overlay">
    <div class="content">
    </div>
  </div>`
})

