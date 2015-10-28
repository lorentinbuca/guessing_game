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
var sport = prompt("Is Baseball my favorite sport?");
	if  (sport.toLowerCase() === "no" || sport.toLowerCase() ==="nah"){
		alert("Correct, soccer is my favorite sport.");
		console.log('Correct my favorite sport is: ' + sport);
		score += 1;
}	else {
		alert("Wrong, my favorite sport is soccer");
		console.log("Incorrect, my favorite sport is:" + sport);
}	
var country = prompt("Is China my favorite country to visit?");
	if  (country.toLowerCase() === "no" || country.toLowerCase() === "nah"){
		alert("Correct, my favorite place to visit is Albania");
		console.log('Correct, my favorite country is: ' + country);
		score += 1;
}	else {
		alert("Wrong, my favorite country is Albania.");
		console.log("Incorrect, my favorite country to visit is Albania:" + country);
}

		alert("You answered " + score + " out 3 correct");