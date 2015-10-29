var score = 0;
var name = prompt("What's your name?");
alert("Ok, " + name + " let's play this game real quick");

function firstQuestion() {
	var ans1 = document.getElementById('answer1');
var car = prompt('Is BMW my favorite car? Yes or No');
	if  (car.toLowerCase() === "yes"|| car.toLowerCase() === "yeah"){
		ans1.innerHTML = "Correct, my favorite car is BMW";
		//alert("Correct, my favorite car is BMW");
		console.log('Correct, my favorite car is: ' + car);
		score += 1;
}	else {
		ans1.innerHTML = "Wrong, my favorite car is BMW";
		// id="answer1"alert("Wrong, my favorite car is BMW");
		console.log("Incorrect, my favorite car is:" + car)
	}
}

function secondQuestion() {
	var ans2 = document.getElementById('answer2');
var sport = prompt("Is Baseball my favorite sport? Yes or NO");
	if  (sport.toLowerCase() === "no" || sport.toLowerCase() ==="nah"){
		ans2.innerHTML = "Correct, soccer is my favorite sport.";
		//alert("Correct, soccer is my favorite sport.");
		console.log('Correct my favorite sport is: ' + sport);
		score += 1;
}	else {
		ans2.innerHTML = "Wrong, my favorite sport is soccer";
		//alert("Wrong, my favorite sport is soccer");
		console.log("Incorrect, my favorite sport is:" + sport);
	}
}

function thirdQuestion() {
	var ans3 = document.getElementById('answer3');
var country = prompt("Is China my favorite country to visit? Yes or No");
	if  (country.toLowerCase() === "no" || country.toLowerCase() === "nah"){
		ans3.innerHTML = "Correct, my favorite place to visit is Albania";
		//alert("Correct, my favorite place to visit is Albania");
		console.log('Correct, my favorite country is: ' + country);
		score += 1;
}	else {
		ans3.innerHTML = "Wrong, my favorite country is Albania.";
	//	alert("Wrong, my favorite country is Albania.");
		console.log("Incorrect, my favorite country to visit is Albania:" + country);
	}
}

function fourthQuestion() {
	var ans4 = document.getElementById('answer4');
var city = prompt("Is NYC my favorite city? Yes or No");
	if  (city.toLowerCase() === "no" || city.toLowerCase() === "nah"){
		ans4.innerHTML = "Correct, my favorite city is Miami";
		//alert("Correct, my favorite city is Miami");
		console.log('Correct, my favorite city is: ' + city);
		score += 1;
}	else {
		ans4.innerHTML = "Wrong, my favorite city is Miami";
		//alert("Correct, my favorite city is Miami"");
		console.log("Incorrect, my favorite city to visit is city:" + city);
 }
}

function fifthQuestion() {
	var ans5 = document.getElementById('answer5');
	var jokeQ1 = parseInt(prompt("How many programmers does it take to change a light bulb"));
	while(jokeQ1 !== 0) {
		ans5.innerHTML = "0";
		//alert("Guess between 0-4 " + typeof(jokeQ1));
		console.log("Answer " + typeof(0));
   	jokeQ1 = parseInt(prompt("Guess again, not the right number."));
 	}
 	if(jokeQ1 === 0){
 		ans5.innerHTML = "Correct, soccer is my favorite sport.";
 		//alert("0 is right, that's a HARDWARE problem!");
 		console.log("Good guess.");
 		score += 1;
 	}
}

function sixthQuestion() {
	var ans6 = document.getElementById('answer6');
var userNumber = parseInt(prompt("What's my favorite number between 1-6"));
	while(userNumber !== 2) {
		ans6.innerHTML = "Correct, soccer is my favorite sport.";
		//alert("Guess " + typeof(userNumber));
		console.log("Answer " + typeof(2));
   	userNumber = parseInt(prompt("Guess again, not the right number."));
 }
 	if(userNumber === 2) {
 		ans6.innerHTML = "Correct, soccer is my favorite sport.";
 	//	alert("Good guess, you finally got it!");
 		console.log("Good guess.");
 		score += 1;
 }
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();

alert("You answered " + score + " out 6 correct");
