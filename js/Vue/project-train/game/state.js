// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // UI
  activeOverly: null,
  activeOverlay: null,
  // World
  worldRatio: getWorldRatio(),
  // Game
  turn: 1,
  players: [
    {
      name: 'Anne of Cleves',
      food: 10,
      health: 10,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
    {
      name: 'William the Bad',
      food: 10,
      health: 10,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    }
  ],
  currentPlayerIndex: Math.round(Math.random()),
  testHand: [],
  get currentPlayer() {
    return state.players[state.currentPlayerIndex];
  },
  get currentOpponentId() {
    return state.currentPlayerIndex === 0 ? 1 : 0;
  },
  get currentOpponent() {
    return state.players[state.currentOpponentId];
  },
  drawPile: pile,
  discardPile: {},
  get currentHand() {
    return state.currentPlayer.hand;
  },
  canPlay: false,
  // TODO Other things
}
