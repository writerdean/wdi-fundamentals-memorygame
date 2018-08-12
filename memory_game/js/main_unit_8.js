var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardOne);
console.log('User flipped ' + cardTwo);

if (cardsInPlay.length === 2) {
  //console.log('You have two cards, do they match?');
  if (cardOne === cardTwo) {
  	alert('You found a match!');
  } else {
  	alert('Sorry, please try again.');
  }
} else {
	console.log('Please draw another card.');
}
