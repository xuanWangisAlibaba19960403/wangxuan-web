Vue.component('top-bar', {
  template: `<div class="top-bar">
    Top bar
  </div>`,
  props: ['players', 'currentPlayerIndex', 'turn'],
  created() {
    console.log(this.players);
  },
})
