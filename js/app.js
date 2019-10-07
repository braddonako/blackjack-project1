// 1)create a deck x
// 2) write a function to shuffle the deck x
// 3) write a function to deal the cards to each player. x
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
  img: '2H.png'
}, {
  suit: '2 of Spades',
  value: 2,
  img: '2S.png'
}, {
  suit: '3 of Clubs',
  value: 3,
  img: '3C.png'
}, {
  suit: '3 of Diamonds',
  value: 3,
  img: '3D.png'
}, {
  suit: '3 of Hearts',
  value: 3,
  img: '3H.png'
}, {
  suit: '3 of Spades', 
  value: 3,
  img: '3S.png'
}, {
  suit: '4 of Clubs',
  value: 4,
  img: '4C.png'
}, {
  suit: '4 of Diamonds',
  value: 4,
  img: '4D.png'
}, {
  suit: '4 of Hearts',
  value: 4,
  img: '4H.png'
}, {
  suit:'4 of Spades',
  value: 4,
  img: '4S.png'
}, {
  suit:'5 of Clubs',
  value: 5,
  img: '5C.png'
}, {
  suit: '5 of Diamonds',
  value: 5,
  img: '5D.png'
}, {
  suit:'5 of Hearts',
  value: 5,
  img: '5H.png'
}, {
  suit: '5 of Spades',
  value: 5,
  img: '5S/png'
}, {
  suit: '6 of Clubs',
  value: 6,
  img: '6C.png'
}, {
  suit: '6 of Diamonds',
  value: 6,
  img: '6D.png'
}, {
  suit: '6 of Hearts',
  value: 6,
  img: '6H.png'
}, {
  suit: '6 of Spades',
  value: 6,
  img: '6S.png'
}, {
  suit: '7 of Clubs',
  value: 7,
  img: '7C.png'
}, {
  suit: '7 of Diamonds',
  value: 7,
  img: '7D.png'
}, {
  suit: '7 of Hearts',
  value: 7,
  img: '7H.png'
}, {
  suit: '7 of Spades',
  value: 7,
  img: '7S.png'
}, {
  suit: '8 of Clubs',
  value: 8,
  img: '8S.png'
}, {
  suit: '8 of Diamonds',
  value: 8,
  img: '8D.png'
}, {
  suit: '8 of Hearts',
  value: 8,
  img: '8H.png'
}, {
  suit: '8 of Spades',
  value: 8,
  img: '8S.png'
}, {
  suit:'9 of Clubs',
  value: 9,
  img: '9C.png'
}, {
	suit: '9 of Diamonds',
	value: 9,
	img: '9D.png'
}, {
  suit: '9 of Hearts',
  value: 9,
  img: '9H.png'
}, {
  suit: '9 of Spades',
  value: 9,
  img: '9S.png'
}, {
  suit: '11 Ace of Clubs',
  value: 11,
  img: 'AC.png'
}, {
  suit: '11 Ace of Diamonds',
  value: 11,
  img: 'AD.png'
}, {
  suit:'11 Ace of Hearts',
  value: 11,
  img: 'AH.png'
}, {
 suit: '11 Ace of Spades',
 value: 11,
 img: 'AS.png'
}, {
  suit: '10 Jack of Clubs',
  value: 10,
  img: 'JC.png'
}, {
  suit: '10 Jack of Diamonds',
  value: 10,
  img: 'JD.png'
}, {
  suit:'10 Jack of Hearts',
  value: 10,
  img: 'JH.png'
}, {
  suit: '10 Jack of Spades',
  value: 10,
  img: 'JS.png'
}, {
 suit: '10 King of Clubs',
 value: 10,
 img: 'KC.png'
}, {
  suit: '10 King of Diamonds',
  value: 10,
  img: 'KD.png'
}, {
  suit: '10 King of Hearts',
  value: 10,
  img: 'KH.png'
}, {
  suit: '10 Kind of Spades',
  value: 10,
  img: 'KS.png'
}, {
  suit: '10 Queen of Clubs',
  value: 10,
  img: 'QC.png'
}, {
  suit: '10 Queen of Diamonds',
  value: 10,
  img: 'QD.png'
}, {
  suit: '10 Queen of Hearts',
  value: 10,
  img: 'QH.png'
}, {
  suit:'10 Queen of Spades',
  value: 10,
  img: 'QS.png'
}

]

const player = { 
	name: 'Brad',
	hand: [],
	deal(){ // this will shuffle the deck, as well as giving the player two random cards
		for (let i = 0; i < 2; i++){
		let card = Math.floor(Math.random() * cardId.length); //push into a new array === current hand
		console.log('You have been dealt a ' + cardId[card].suit);
		this.hand.push(cardId[card]);
		cardId.splice(card, 1)[0]; 
	    }
	},  
	    total(){
	    	const total = this.hand[0].value + this.hand[1].value;
	    	console.log(total + ' is the score of your two cards. Do you want to hit or stay?')
	    },
	    hit(){
	    	for (let i = 0; i<1; i++){
	    		let hit = Math.floor(Math.random() * cardId.length);
	    		console.log('Here is your updated hand ' + cardId[hit].suit);
	    		this.hand.push(cardId[hit]);
	    		cardId.splice(this.hand, 1)[0];
	    	}
	    }
	}


const computer = {
	name: 'computer',
	hand: [],
	deal(){ // same function as the player deal. This will give the computer two random cards
		for (let i = 0; i < 2; i++){
		    let card = Math.floor(Math.random() * cardId.length);
		    console.log('The computer has been dealt a ' + cardId[card].suit); 
		    this.hand.push(cardId[card]);
		    cardId.splice(card, 1)[0]; 
	    }
	},
	total(){
		const total = this.hand[0].value + this.hand[1].value;
		console.log(total + ' is the score of the computers two cards.');
		if (total >= 17){
			console.log('The dealer is staying')
		} else if (total < 17){
	    	for (let i = 0; i<1; i++){
	    		let hit = Math.floor(Math.random() * cardId.length);
	    		console.log('The computer hit. Their new card is ' + cardId[hit].suit);
	    		this.hand.push(cardId[hit]);
	    		cardId.splice(this.hand, 1)[0];
		}
	}
}
}

	// stand(){

	// }

player.deal();
computer.deal();
player.total();
computer.total();




