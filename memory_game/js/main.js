console.log("Up and running!");



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.jpg",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.jpg",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.jpg",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.jpg",
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
}
};

var flipCard = function: (cards[cardId].rank) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards.cardImage);
	cardsInPlay = cardsInPlay.push(cards[cardId].rank);
	console.log(cards.suit);
	
if (cardsInPlay.length === 2) {
	alert("Hello, friends.");
} else if(cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
};









