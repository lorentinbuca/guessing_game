var score = 0;
var name = prompt("What's your name?");
alert("Ok, " + name + " let's play this game real quick");

var car = prompt('Is BMW my favorite car? Yes or No');
	if  (car.toLowerCase() === "yes"|| car.toLowerCase() === "yeah"){
		alert("Correct, my favorite car is BMW");
		console.log('Correct, my favorite car is: ' + car);
		score += 1;
}	else {
		alert("Wrong, my favorite car is BMW");
		console.log("Incorrect, my favorite car is:" + car)
}
var sport = prompt("Is Baseball my favorite sport? Yes or NO");
	if  (sport.toLowerCase() === "no" || sport.toLowerCase() ==="nah"){
		alert("Correct, soccer is my favorite sport.");
		console.log('Correct my favorite sport is: ' + sport);
		score += 1;
}	else {
		alert("Wrong, my favorite sport is soccer");
		console.log("Incorrect, my favorite sport is:" + sport);
}	
var country = prompt("Is China my favorite country to visit? Yes or No");
	if  (country.toLowerCase() === "no" || country.toLowerCase() === "nah"){
		alert("Correct, my favorite place to visit is Albania");
		console.log('Correct, my favorite country is: ' + country);
		score += 1;
}	else {
		alert("Wrong, my favorite country is Albania.");
		console.log("Incorrect, my favorite country to visit is Albania:" + country);
} 
var city = prompt("Is NYC my favorite city? Yes or No");
	if  (city.toLowerCase() === "no" || city.toLowerCase() === "nah"){
		alert("Correct, my favorite city is Miami");
		console.log('Correct, my favorite city is: ' + city);
		score += 1;
}	else {
		alert("Wrong, my favorite city is Miami.");
		console.log("Incorrect, my favorite city to visit is city:" + city);
 }
var jokeQ1 = parseInt(prompt("How many programmers does it take to change a light bulb"));
	while(jokeQ1 !== 0) {
		alert("Guess between 0-4 " + typeof(jokeQ1));
		console.log("Answer " + typeof(0));
   	jokeQ1 = parseInt(prompt("Guess again, not the right number."));
 }
 	if(jokeQ1 === 0){
 		alert("0 is right, that's a HARDWARE problem!");
 		console.log("Good guess.");
 		score += 1;
 }
var userNumber = parseInt(prompt("What's my favorite number between 1-6"));
	while(userNumber !== 2) {
		alert("Guess " + typeof(userNumber));
		console.log("Answer " + typeof(2));
   	userNumber = parseInt(prompt("Guess again, not the right number."));
 }
 	if(userNumber === 2) {
 		alert("Good guess, you finally got it!");
 		console.log("Good guess.");
 		score += 1;
 }


		alert("You answered " + score + " out 6 correct");