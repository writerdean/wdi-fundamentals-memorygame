var cards = [
{rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//append the cardElement to the game board (id=game-board) with appendChild();
		document.getElementById('game-board').appendChild(cardElement);

	}
	
}
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert('You have a match!');
	  } else {
		  alert('Sorry, try again.');
	  }

}

var flipCard = function(cardId) {
	var cardId = this.getAttribute('data-id');
	var curCard = cards[cardId];
	console.log(cardId);
  console.log(curCard);
	console.log('User flipped ' + curCard.rank + " of " + curCard.suit);
	console.log(curCard.cardImage);
  cardsInPlay.push(curCard.rank);

  this.setAttribute('src', curCard.cardImage);

  if (cardsInPlay.length === 2) {
	  checkForMatch();

  } else {
	  alert('Please draw another card');
  }

}
// flipCard(0);
// flipCard(2);
createBoard();