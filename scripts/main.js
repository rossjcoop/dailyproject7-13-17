/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

//cardstack = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]


function handValue(hand){

	let total = 0
	let aceCount = 0

for(i = 0; i < hand.length; i++){

	let card = hand[i]
	

   	if(card === "J" || card === "Q" || card === "K"){
   		total += 10
   	}

   	else if(card === "A"){
   	 	total += 11
   	  	aceCount += 1
    }

   	else if(card === "2"){
   		total += 2
   	}

   	else if(card === "3"){
   		total += 3
   	}

   	else if(card === "4"){
   		total += 4
   	}

   	else if(card === "5"){
   		total += 5
   	}

   	else if(card === "6"){
   		total += 6
   	}

   	else if(card === "7"){
   		total += 7
   	}

   	else if(card === "8"){
   		total += 8
   	}

   	else if(card === "9"){
   		total += 9
   	}

   	else if(card === "10")
   		total += 10
    }

	while (total > 21 && aceCount > 0) {
	total -=10;
	aceCount -= 1;
	}

	return total;
}



 


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/