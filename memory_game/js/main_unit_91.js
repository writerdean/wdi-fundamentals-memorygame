var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		  	alert("You found a match!");
		  } else {
		  	alert("Sorry, please try again.");
		  }
}


var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

		if (cardsInPlay.length === 2) {
			console.log("You have two cards.  Do they match?");
		  checkForMatch();
		} else {
			console.log("Please draw another card.");
		}

};

flipCard(3);
flipCard(0);

