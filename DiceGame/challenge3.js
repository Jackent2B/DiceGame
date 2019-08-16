
var scores, roundScore ,activePlayer,gamePlaying;
init();


 document.getElementById('dice-1').style.display='none';
 document.getElementById('dice-2').style.display='none';

//using getElementById
init();

//Event Listener
//you can see more events on Mozilla MDN
//if we declare this below variable inside function then its value gets lost every time function executes but we needed the last value of dice therfore we declared it here
// var dice2;//This variable is part of challenge1.
document.querySelector(".btn-roll").addEventListener('click',function(){

// Original Code
	if(gamePlaying){

			//a random no.
  	var dice1 = Math.floor(Math.random() * 6)+1;
  	var dice2 = Math.floor(Math.random() * 6)+1;

	//display the result
	 document.getElementById('dice-1').style.display='block';
	 document.getElementById('dice-2').style.display='block';

	//To change img
	document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
	document.getElementById('dice-2').src = 'dice-'+dice2+'.png';

	//update the round score only if the rolled no. of dice 1 and dice 2 is not 1
	if(dice1>1 && dice2>1){
		//Add score
		roundScore +=(dice1+dice2);
		document.getElementById('current-'+activePlayer).textContent=roundScore;

	}
	else{
		scores[activePlayer]=0;
		document.querySelector("#score-"+activePlayer).textContent='0';
		nextPlayer();
	}

}


});


document.querySelector(".btn-hold").addEventListener('click',function(){
	

	if(gamePlaying){


	//Add current score to global score
	scores[activePlayer]+=roundScore;

	//Update the UI
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	// Check If player won the game
	var value = document.querySelector('.final-score').value;//challenege 2
	if(value){
		winningScore=value;
	}else{
		winningScore=100;
	}
	if( scores[activePlayer]>winningScore){
		document.querySelector("#name-"+activePlayer).textContent="WINNER!";
	
			 document.getElementById('dice-1').style.display='none';
			 document.getElementById('dice-2').style.display='none';

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
		document.getElementById('dice-1').style.display='none';
		document.getElementById('dice-1').style.display='none';
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
	document.getElementById('dice-1').style.display='none';
	document.getElementById('dice-1').style.display='none';


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