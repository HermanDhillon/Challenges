function defineSuit(card) {
  return card.includes('♣') ?  'clubs' :
  card.includes('♦') ?  'diamonds' :
  card.includes("♥") ?  'hearts' :
  card.includes('♠') ?  'spades' : null

}