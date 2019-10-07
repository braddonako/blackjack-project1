// 1)create a deck x
// 2) write a function to shuffle the deck 
// 3) write a function to deal the cards to each player. 
// 4) write a function to for hit and stay. Porbably with jquery. If the button is pressed,
// they will be dealt another card
// 5) Computer player will automatically hit until they are over 17 or bust
// 6) We need a function that will reset the game after a round is

const cardId = [
{suit: '10 of Clubs',
value: 10},
'10 of Diamonds': 10,
'10 of Hearts': 10,
'10 of Spades': 10,
'2 of Clubs': 2,
'2 of Diamonds': 2,
'2 of Hearts': 2,
'2 of Spades': 2,
'3 of Clubs': 3,
'3 of Diamonds': 3,
'3 of Hearts': 3,
'3 of Spades': 3,
'4 of Clubs': 4,
'4 of Diamonfs': 4,
'4 of Hearts': 4,
'4 of Spades': 4,
'5 of Clubs': 5,
'5 of Diamonds': 5,
'5 of Hearts': 5,
'5 of Spades': 5,
'6 of Clubs': 6,
'6 of Diamonds': 6,
'6 of Hearts': 6,
'6 of Spades': 6,
'7 of Clubs': 7,
'7 of Diamonds': 7,
'7 of Hearts': 7,
'7 of Spades': 7,
'8 of Clubs': 8,
'8 of Diamonds': 8,
'8 of Hearts': 8,
'8 of Spades': 8,
'9 of Clubs': 9,
'9 of Diamonds': 9,
'9 of Hearts': 9,
'9 of Spades': 9,
'11 Ace of Clubs': 11,
'11 Ace of Diamonds': 11,
'11 Ace of Hearts': 11,
'11 Ace of Spades': 11,
'10 Jack of Clubs': 10,
'10 Jack of Diamonds': 10,
'10 Jack of Hearts': 10,
'10 Jack of Spades': 10,
'10 King of Clubs': 10,
'10 King of Diamonds': 10,
'10 King of Hearts': 10,
'10 Kind of Spades': 10,
'10 Queen of Clubs': 10,
'10 Queen of Diamonds': 10,
'10 Queen of Hearts': 10,
'10 Queen of Spades': 10
]


function shuffleArray(cardId) {
    for (let i = cardId.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardId[i], array[j]] = [array[j], cardId[i]];
    }
}

shuffleArray(cardId);



