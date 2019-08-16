/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/



var scores, roundScore ,activePlayer,gamePlaying;
init();

//It will give a random no. between 1 and 6.
//Math.random() method will give a no. between 0 and 1 along with decimal. 
//Math.floor() method terminates the decimal part.
// dice = Math.floor(Math.random() * 6)+1;


//document is predefined object in JavaScript
//textContent method is used to assign text
// document.querySelector('#current-0').textContent = dice;//but it is for player 1
//what to do for player 2 then?
//rather than duplicating the same code we can do:
//here we are using querySelector to 'Set' information
//document.querySelector('#current-'+activePlayer).textContent = dice;//now it will depend on active player


//innerHTML can be used as a substitution for textContent method which also allows us to add use <html> elements as well rather than using pline text 
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' +dice+'</em>';


//document.querySelector can also be used to 'Get' information as well 
// var x = document.querySelector('#current-'+activePlayer).textContent;
// console.log(x);

//document.querySelector can also be used to change 'CSS'.
//style method is used to change css
document.querySelector(".dice").style.display='none';

//using getElementById
init();

//Event Listener
//you can see more events on Mozilla MDN
//if we declare this below variable inside function then its value gets lost every time function executes but we needed the last value of dice therfore we declared it here
var dice2;//This variable is part of challenge1.
document.querySelector(".btn-roll").addEventListener('click',function(){

//Original Code
// 	if(gamePlaying){

// 			//a random no.
//   	var dice = Math.floor(Math.random() * 6)+1;
// 	//display the result
// 	var diceDOM = document.querySelector('.dice');
// 	diceDOM.style.display='block';
// 	//To change img
// 	diceDOM.src = 'dice-'+dice+'.png';
// 	//update the round score only if the rolled no. is not 1
// 	if(dice>1){
// 		//Add score
// 		roundScore +=dice;
// 		document.getElementById('current-'+activePlayer).textContent=roundScore;

// 	}else{
// 		nextPlayer();
// 	}

// }

//challenge 1
if(gamePlaying){
	var dice1=Math.floor(Math.random()*6)+1;
		//display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display='block';
	//To change img
	diceDOM.src = 'dice-'+dice1+'.png';

	//update the round score only if the rolled no. is not 1
	if(dice1===6 && dice2===6){

		scores[activePlayer]=0;
		document.querySelector("#score-"+activePlayer).textContent='0';
		nextPlayer();



	}else if(dice1>1){
		//Add score
		roundScore +=dice1;
		document.getElementById('current-'+activePlayer).textContent=roundScore;

	}
	else{
		nextPlayer();
	}
	dice2=dice1;
}

});


document.querySelector(".btn-hold").addEventListener('click',function(){

	if(gamePlaying){


	//Add current score to global score
	scores[activePlayer]+=roundScore;

	//Update the UI
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

	// Check If player won the game
	if(scores[activePlayer]>20){
		document.querySelector("#name-"+activePlayer).textContent="WINNER!";
		document.querySelector('.dice').style.display= 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying=false;

	}else
	{
		
	//The moment the player clicks on hold the active player changes
	nextPlayer();
	}
}

});

function nextPlayer(){
	//next player
		activePlayer===0?activePlayer=1:activePlayer=0;
		// scores[0] += roundScore;
		roundScore=0;
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';

		//removing and adding classes
		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		//using toggle
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//If 1 comes, then dice disappears
		document.querySelector(".dice").style.display='none';
}



//New Game Button
document.querySelector(".btn-new").addEventListener('click',function(){
	init();

});

function init(){
	scores = [0,0]; //initial scores of two players
	roundScore=0 ;  //round score gained by player in their respective rounds . Initially they are zero. 
	activePlayer = 0; //it represnts player 1 and when it will be zero it represent player 2
	gamePlaying=true;
	document.querySelector('.dice').style.display='none';

	//get elements by ID
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');

	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('active');
	
	document.querySelector('.player-0-panel').classList.add('active');


}