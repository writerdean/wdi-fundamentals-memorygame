
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
		  if (cardsInPlay[0] === cardsInPlay[1]) {
		  	console.log("You found a match");
		  //alert("You found a match!");
	  } else {
		  alert("Sorry, try again.");
	  }
}

var flipCard = function (cardId) {

  var card = cards[cardId];
  cardsInPlay.push(card);

  console.log('User flipped ' + card);

  if (cardsInPlay.length === 2) {
    checkForMatch;
  }
}

flipCard(0);
flipCard(1);

