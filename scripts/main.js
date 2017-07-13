/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

cardstack = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

//sample hand = ["Q", "2"]//
function handValue(yourhand){

for(i = 0; i < hand.length; i++){

handValue = hand.reduce(function(){


   	if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
   		hand[i] = 10
   	}

   	if(hand[i] === "1"){
   		hand[i] = 1
   	}

   	if(hand[i] === "2"){
   		hand[i] = 2
   	}

   	if(hand[i] === "3"){
   		hand[i] = 3
   	}

   	if(hand[i] === "4"){
   		hand[i] = 4
   	}

   	if(hand[i] === "5"){
   		hand[i] = 5
   	}

   	if(hand[i] === "6"){
   		yourhand[i] = 6
   	}

   	if(hand[i] === "7"){
   		yourhand[i] = 7
   	}

   	if(hand[i] === "8"){
   		yourhand[i] = 8
   	}

   	if(hand[i] === "9"){
   		hand[i] = 9
   	}

    if(hand[i] === "A" && handValue <= 10 ){
   	 hand[i] = 11
    }

    else if (yourhand[i] === "A" & handValue > 10 ){ 
	yourhand[i] = 1
	}

}

console.log(handValue())


   











}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/