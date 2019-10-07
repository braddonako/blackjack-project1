// 1)create a deck x
// 2) write a function to shuffle the deck 
// 3) write a function to deal the cards to each player. 
// 4) write a function to for hit and stay. Porbably with jquery. If the button is pressed,
// they will be dealt another card
// 5) Computer player will automatically hit until they are over 17 or bust
// 6) We need a function that will reset the game after a round is

const cardId = [
{
  suit: '10 of Clubs',
  value: 10,
  img: '10C.png'
}, {
  suit: '10 of Diamonds',
  value: 10,
  img: '10D.png'
},{
  suit: '10 of Hearts',
  value: 10,
  img: '10H.png'
}, {
  suit: '10 of Spades',
  value: 10,
  img: '10S.png'
}, {
  suit: '2 of Clubs',
  value: 2,
  img: '2C.png'
}, {
  suit: '2 of Diamonds',
  value: 2,
  img: '2D.png'
  }, {  
  suit: '2 of Hearts',
  value: 2,
}, {
  suit: '2 of Spades',
  value: 2
}, {
  suit: '3 of Clubs',
  value: 3
}, {
  suit: '3 of Diamonds',
  value: 3
}, {
  suit: '3 of Hearts',
  value: 3
}, {
  suit: '3 of Spades', 
  value : 3
}, {
  suit: '4 of Clubs',
  value: 4
}, {
  suit: '4 of Diamonds',
  value: 4
}, {
  suit: '4 of Hearts',
  value: 4
}, {
  suit:'4 of Spades',
  value: 4
}, {
  suit:'5 of Clubs',
  value: 5
}, {
  suit: '5 of Diamonds',
  value: 5
}, {
  suit:'5 of Hearts',
  value: 5
}, {
  suit: '5 of Spades',
  value: 5,
}, {
  suit: '6 of Clubs',
  value: 6
}, {
  suit: '6 of Diamonds',
  value: 6
}, {
  suit: '6 of Hearts',
  value: 6
}, {
  suit: '6 of Spades',
  value: 6
}, {
suit: '7 of Clubs',
value: 7
}, {
  suit: '7 of Diamonds',
  value: 7
}, {
  suit: '7 of Hearts',
  value: 7
}, {
  suit: '7 of Spades',
  value: 7
}, {
  suit: '8 of Clubs',
  value: 8
}, {
  suit: '8 of Diamonds',
  value: 8
}, {
  suit: '8 of Hearts',
  value: 8
}, {
  suit: '8 of Spades',
  value: 8
}, {
  suit:'9 of Clubs',
  value: 9
}, {
	suit: '9 of Diamonds',
	value: 9
}, {
  suit: '9 of Hearts',
  value: 9
}, {
  suit: '9 of Spades',
  value: 9
}, {
  suit: '11 Ace of Clubs',
  value: 11
}, {
  suit: '11 Ace of Diamonds',
  value: 11
}, {
  suit:'11 Ace of Hearts',
  value: 11
}, {
 suit: '11 Ace of Spades',
 value: 11
}, {
  suit: '10 Jack of Clubs',
  value: 10
}, {
  suit: '10 Jack of Diamonds',
  value: 10 
}, {
  suit:'10 Jack of Hearts',
  value: 10
}, {
  suit: '10 Jack of Spades',
  value: 10
}, {
 suit: '10 King of Clubs',
 value: 10
}, {
  suit: '10 King of Diamonds',
  value: 10
}, {
  suit: '10 King of Hearts',
  value: 10
}, {
  suit: '10 Kind of Spades',
  value: 10
}, {
  suit: '10 Queen of Clubs',
  value: 10
}, {
  suit: '10 Queen of Diamonds',
  value: 10
}, {
  suit: '10 Queen of Hearts',
  value: 10
}, {
  suit:'10 Queen of Spades',
  value: 10
}

]


// function shuffleArray(cardId) {
//     for (let i = cardId.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [cardId[i], array[j]] = [array[j], cardId[i]];
//     }
// }

// shuffleArray(cardId);



