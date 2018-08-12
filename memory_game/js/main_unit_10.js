var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		  	alert("You found a match!");
		  } else {
		  	alert("Sorry, please try again.");
		  }
}


var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

		if (cardsInPlay.length === 2) {
			console.log("You have two cards.  Do they match?");
		  checkForMatch();
		} else {
			console.log("Please draw another card.");
		}

};

flipCard(1);
flipCard(0);

