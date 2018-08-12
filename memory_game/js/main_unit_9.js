var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var flipCard = function (cardId) {

	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

		// var cardOne = cards[0];
		// cardsInPlay.push(cardOne);

		// var cardTwo = cards[1];
		// cardsInPlay.push(cardTwo);

		// console.log('User flipped ' + cardOne);
		// console.log('User flipped ' + cardTwo);

		if (cardsInPlay.length === 2) {
			console.log('You have two cards.  Do they match?');
		  if (cardsInPlay[0] === cardsInPlay[1]) {
		  	console.log('You found a match!');
		  } else {
		  	console.log('Sorry, please try again.');
		  }
		} else {
			console.log('Please draw another card.');
		}


};

flipCard(0);
flipCard(1);

