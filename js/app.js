// ||x at// ||x at the end means I have completed the task and have it working

// 1)create a deck ||x
// 2) write a function to shuffle the deck ||x
// 3) write a function to deal the cards to each player. ||x
// 4) write a function to for hit and stand. Probably with jquery??  If the button is pressed,
// they will be dealt another card x -- // use jQuery with a timer,(setInterval) if the timer is not pressed, it is player will stay.
//This needs to be a button..?
// ?? same timer for the stand button...

// 5) Dealer will automatically hit until they are over 17 or bust // I have written this fuction for both the dealer||x
// 6) Options for the player to hit or stand... I have written code below, but it continues to hit even if I type stand in alert
//this will be a button at somepoint, that when clicked will stand.
// 6b
// 6c) We need a function that will reset the game after a round is

//if i bust game over


const cardId = [
{
  suit: '10 of Clubs',
  value: 10,
  img: 'PNG/10C.png'
}, {
  suit: '10 of Diamonds',
  value: 10,
  img: 'PNG/10D.png'
},{
  suit: '10 of Hearts',
  value: 10,
  img: 'PNG/10H.png'
}, {
  suit: '10 of Spades',
  value: 10,
  img: 'PNG/10S.png'
}, {
  suit: '2 of Clubs',
  value: 2,
  img: 'PNG/2C.png'
}, {
  suit: '2 of Diamonds',
  value: 2,
  img: 'PNG/2D.png'
  }, {  
  suit: '2 of Hearts',
  value: 2,
  img: 'PNG/2H.png'
}, {
  suit: '2 of Spades',
  value: 2,
  img: 'PNG/2S.png'
}, {
  suit: '3 of Clubs',
  value: 3,
  img: 'PNG/3C.png'
}, {
  suit: '3 of Diamonds',
  value: 3,
  img: 'PNG/3D.png'
}, {
  suit: '3 of Hearts',
  value: 3,
  img: 'PNG/3H.png'
}, {
  suit: '3 of Spades', 
  value: 3,
  img: 'PNG/3S.png'
}, {
  suit: '4 of Clubs',
  value: 4,
  img: 'PNG/4C.png'
}, {
  suit: '4 of Diamonds',
  value: 4,
  img: 'PNG/4D.png'
}, {
  suit: '4 of Hearts',
  value: 4,
  img: 'PNG/4H.png'
}, {
  suit:'4 of Spades',
  value: 4,
  img: 'PNG/4S.png'
}, {
  suit:'5 of Clubs',
  value: 5,
  img: 'PNG/5C.png'
}, {
  suit: '5 of Diamonds',
  value: 5,
  img: 'PNG/5D.png'
}, {
  suit:'5 of Hearts',
  value: 5,
  img: 'PNG/5H.png'
}, {
  suit: '5 of Spades',
  value: 5,
  img: 'PNG/5S.png'
}, {
  suit: '6 of Clubs',
  value: 6,
  img: 'PNG/6C.png'
}, {
  suit: '6 of Diamonds',
  value: 6,
  img: 'PNG/6D.png'
}, {
  suit: '6 of Hearts',
  value: 6,
  img: 'PNG/6H.png'
}, {
  suit: '6 of Spades',
  value: 6,
  img: 'PNG/6S.png'
}, {
  suit: '7 of Clubs',
  value: 7,
  img: 'PNG/7C.png'
}, {
  suit: '7 of Diamonds',
  value: 7,
  img: 'PNG/7D.png'
}, {
  suit: '7 of Hearts',
  value: 7,
  img: 'PNG/7H.png'
}, {
  suit: '7 of Spades',
  value: 7,
  img: 'PNG/7S.png'
}, {
  suit: '8 of Clubs',
  value: 8,
  img: 'PNG/8S.png'
}, {
  suit: '8 of Diamonds',
  value: 8,
  img: 'PNG/8D.png'
}, {
  suit: '8 of Hearts',
  value: 8,
  img: 'PNG/8H.png'
}, {
  suit: '8 of Spades',
  value: 8,
  img: 'PNG/8S.png'
}, {
  suit:'9 of Clubs',
  value: 9,
  img: 'PNG/9C.png'
}, {
	suit: '9 of Diamonds',
	value: 9,
	img: 'PNG/9D.png'
}, {
  suit: '9 of Hearts',
  value: 9,
  img: 'PNG/9H.png'
}, {
  suit: '9 of Spades',
  value: 9,
  img: 'PNG/9S.png'
}, {
  suit: '11 Ace of Clubs',
  value: 11,
  img: 'PNG/AC.png'
}, {
  suit: '11 Ace of Diamonds',
  value: 11,
  img: 'PNG/AD.png'
}, {
  suit:'11 Ace of Hearts',
  value: 11,
  img: 'PNG/AH.png'
}, {
 suit: '11 Ace of Spades',
 value: 11,
 img: 'PNG/AS.png'
}, {
  suit: '10 Jack of Clubs',
  value: 10,
  img: 'PNG/JC.png'
}, {
  suit: '10 Jack of Diamonds',
  value: 10,
  img: 'PNG/JD.png'
}, {
  suit:'10 Jack of Hearts',
  value: 10,
  img: 'PNG/JH.png'
}, {
  suit: '10 Jack of Spades',
  value: 10,
  img: 'PNG/JS.png'
}, {
 suit: '10 King of Clubs',
 value: 10,
 img: 'PNG/KC.png'
}, {
  suit: '10 King of Diamonds',
  value: 10,
  img: 'PNG/KD.png'
}, {
  suit: '10 King of Hearts',
  value: 10,
  img: 'PNG/KH.png'
}, {
  suit: '10 Kind of Spades',
  value: 10,
  img: 'PNG/KS.png'
}, {
  suit: '10 Queen of Clubs',
  value: 10,
  img: 'PNG/QC.png'
}, {
  suit: '10 Queen of Diamonds',
  value: 10,
  img: 'PNG/QD.png'
}, {
  suit: '10 Queen of Hearts',
  value: 10,
  img: 'PNG/QH.png'
}, {
  suit:'10 Queen of Spades',
  value: 10,
  img: 'PNG/QS.png'
}

]

const hiddenCard = [
	img = "5075a.jpg"
]

$(function () {
  $('[data-toggle="popover"]').popover()
});


const player = { 
	name: 'Brad',
	hand: [],
	sum: 0,
	score: 0,
	deal(){ // this will shuffle the deck, as well as give the player two random cards
		// I looped through my cards array, and pushed two cards from it  into the hand array on line 233.
		// this way the player can access it from the global scope  
		// This is where I could use jQuery?
		// $('.deal').on(click){
		// 	console.log('button is working');
		// }
		for (let i = 0; i < 2; i++){
		let card = Math.floor(Math.random() * cardId.length); //push into a new array === current hand
		console.log('You have been dealt a ' + cardId[card].suit);
		this.hand.push(cardId[card]); // I am removing the card from the cardId class. (Maybe I could name this arrayCardDeck?)deck as well - and placing it in the hand
		// cardId.splice(card, 1)[0]; //taking them out of the array
		let image = document.createElement('img');
		image.src = this.hand[i].img;
		$('#yourCards').append(image);
	    }
	},  
	findSum(){
			this.sum = this.hand[0].value + this.hand[1].value; // This is the sum of the two cards that were dealed
	    	console.log(this.sum + ' is the score of your two cards. Do you want to hit or stay?'); // 
	  //   	if (sum === 21){ // taking this out for now - going to write a seperate function
			// console.log('You have a Blackjack');
			// return;
		// }
	    },
	thisHit(){
	    // this.sum = this.hand[0].value + this.hand[1].value; // This makes it easier to see the score of the two cards. 
	    	
	    for (let i = 0; i < 1; i++){
	    	let hit = Math.floor(Math.random() * cardId.length);
	    	console.log('You have been dealt a ' + cardId[hit].suit);
	    	this.hand.push(cardId[hit]); //take the random card for hit 
	    	// cardId.splice(this.hand, 1)[0]; // remove card from the 52 deck -- taking this out for now. Makes dealing the cards
	    	// a little funky
	    	this.sum = parseInt(this.sum + cardId[hit].value); // If I remembered correctly, this would turn integers into numbers(I tried it and it worked)
			console.log('Your hand total is ' + this.sum);
			let image = document.createElement('img');
			image.src = cardId[hit].img;
			$('#yourCards').append(image);
	    	} 
	    	// if (this.sum > 21){ // this says the dealer has busted if his cards are over 21 || 
	    	// 	//when I run the game, this runs and should end the game
	    	// 	alert('You have busted, dealer wins');
	    	},
	    	stay(){
	    		let stay = this.sum;
	    	}
	    }
// }


const dealer = {
	name: 'dealer',
	hand: [],
	sum: 0,
	deal(){ // same function as the player deal. This will give the computer two random cards
		for (let i = 0; i < 1; i++){
		    let card = Math.floor(Math.random() * cardId.length);
		    console.log('The dealer has been dealt a ' + cardId[card].suit); 
		    this.hand.push(cardId[card]);
		    // cardId.splice(card, 1)[0]; 
		   let image = document.createElement('img');
			image.setAttribute('id', 'hiddenCard');
			image.src = this.hand[i].img;
			$('#dealerCards').append(image);
			$(image).attr('src', '5075a.jpg');
			this.sum = this.hand[0];
			// $(image).append('hiddenCard');
	    }
	},
	dealAgain(){
	for (let i = 0; i < 1; i++){
		    let card = Math.floor(Math.random() * cardId.length);
		    console.log('The dealer has been dealt a ' + cardId[card].suit); 
		    this.hand.push(cardId[card]);
		    // cardId.splice(card, 1)[0]; 
		   let image = document.createElement('img');
			image.src = this.hand[1].img;
			$('#dealerCards').append(image);
	    }
	},
	findSum(){
		this.sum = this.hand[0].value + this.hand[1].value;
		console.log(this.sum + ' is the total of the dealer two cards.');
		},
	thisHit(){
		this.sum = this.hand[0].value + this.hand[1].value;

		 if (this.sum < 17 || this.sum < player.sum){
	    	for (let i = 0; i < 1; i++){
	    		let hit = Math.floor(Math.random() * cardId.length);
	    		console.log('The dealer hit. Their new card is ' + cardId[hit].suit);
	    		this.hand.push(cardId[hit]);
	    		// cardId.splice(this.hand, 1)[0];
	    		this.sum = parseInt(this.sum + cardId[hit].value);
	    		console.log('The dealers total hand is now ' + this.sum);
	    		let image = document.createElement('img');
				image.src = cardId[hit].img;
				$('#dealerCards').append(image);
	    	} 
	    } 
	    else if (this.sum >= player.sum){
			console.log('The dealer is staying!!!');
		} 
	},
	hitAgain(){
		this.sum = this.hand[0].value + this.hand[1].value + this.hand[2].value;

		 if (this.sum < 17 || this.sum < player.sum){
	    	for (let i = 0; i < 1; i++){
	    		let hit = Math.floor(Math.random() * cardId.length);
	    		console.log('The dealer hit. Their new card is ' + cardId[hit].suit);
	    		this.hand.push(cardId[hit]);
	    		// cardId.splice(this.hand, 1)[0];
	    		this.sum = parseInt(this.sum + cardId[hit].value);
	    		console.log('The dealers total hand is now ' + this.sum);
	    		let image = document.createElement('img');
				image.src = cardId[hit].img;
				$('#dealerCards').append(image);
	    	} 
	    } 
	    else if (this.sum >= player.sum){
			console.log('The dealer is staying!!!');
	}
	}
}

// const playerCount = () => {
// 	let sum = 0;

// }
	

const checkForBlackJack = () => {
 if (dealer.sum === 21 && player.sum === 21){
	
	$('#hiddenCard').attr('src', dealer.hand[0].img);
	$('#goodLuck').html('Double BlackJack.  Push.');
	$('#hitBtn').off('click');
	
 }else if (dealer.sum === 21) {
	 // alert('Dealer has a BlackJack, dealer wins! Click reset to play again');
	$('#hiddenCard').attr('src', dealer.hand[0].img);
	$('#goodLuck').html('BlackJack. Dealer win.')
	$('#hitBtn').off('click');
 } else if (player.sum === 21){
	 // alert('You have a BlackJack, you win! Click reset to play again')
 	$('#hiddenCard').attr('src', dealer.hand[0].img);
	$('#goodLuck').html('BlackJack. You win!!')
	$('#hitBtn').off('click');
 }
}

const checkBust = () => {
	if (dealer.sum > 21){
		$('#hiddenCard').attr('src', dealer.hand[0].img);
		$('#goodLuck').html('Dealer bust. You win.')
		$('#hitBtn').off('click');
		setTimeout(function () {
			alert('Do you want to play again?')
			window.location.reload(1);
		}, 3000);

	// alert('The dealer has busted, you win. Click reset to play again');
} else if (player.sum > 21){
	// alert('You busted. Game over. Click reset to play again')
	$('#hiddenCard').attr('src', dealer.hand[0].img);
	$('#goodLuck').html('You bust. Dealer wins.')
	$('#hitBtn').off('click');
	setTimeout(function () {
		alert('Do you want to play again?')
		window.location.reload(1);
	}, 3000);
} else if (player.sum > 21 && dealer.sum > 21){
	// alert('You have both busted. It is a push. Click round to play again');
	$('goodLuck').html('Both busts. You win.')
	$('#hitBtn').off('click');
	setTimeout(function () {
		alert('Do you want to play again?')
		window.location.reload(1);
	}, 3000);
}
}


const compareScore = () =>{
if (player.sum === dealer.sum){
	// alert('The score is the same, it is a push. Click reset to play again');
	$('#goodLuck').html('Push.');
	setTimeout(function () {
		alert('Do you want to play again?')
		window.location.reload(1);
	}, 3000);
} else if (player.sum > dealer.sum && player.sum <= 21 && dealer.sum <= 21){
	// alert('You have won the round! Click reset to play again');
	$('#goodLuck').html('You win!')
	setTimeout(function () {
		alert('Do you want to play again?')
		window.location.reload(1);
	}, 3000);
} else if (dealer.sum > player.sum && dealer.sum <= 21 && player.sum <= 21){
	$('#goodLuck').html('Dealer wins!')
	// alert('The dealer has won this round. Click reset to play again');
	setTimeout(function () {
		alert('Do you want to play again?')
		window.location.reload(1);
	}, 3000);
}
}


const startGame = () => {
	$('#dealBtn').one('click', function() { // The deal button will initiate the two card. Then give the sum in the console
		player.deal();
		player.findSum();
		checkForBlackJack();
		dealer.deal();
		dealer.dealAgain();
		dealer.findSum();
		checkForBlackJack();
		
		$('#hitBtn').on('click', function() { // the player will have an option to hit here. Drawing another card from the deck
		player.thisHit();
		// dealer.thisHit();
		checkBust();
	});
		});
	
	$('#stayBtn').one('click', function(){
		// $('#hitBtn').off('click');
		console.log('You are staying');
		if (dealer.sum < player.sum){
			dealer.thisHit();
			dealer.hitAgain();
			checkBust();
			compareScore();
			$('#hiddenCard').attr('src', dealer.hand[0].img);
		} else if (dealer.sum > player.sum){
			compareScore();
			$('#hiddenCard').attr('src', dealer.hand[0].img);
		} else if (dealer.sum === player.sum){
			dealer.thisHit();
			compareScore();
			$('#hiddenCard').attr('src', dealer.hand[0].img);
		}
		});
	$('#resetBtn').one('click', function(){
		location.reload();
	});
	}

startGame();
// compareScore();












