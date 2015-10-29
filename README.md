Programming School: Code Fellows

Lorentin Buca
# guessing_game

-----------------------Guessing Game built with JavaScript,HTML,CSS------------------------------
The game is about me and few things they have to guess about my favorite things. This is all done in JavaScript with some HTML and CSS included. 

What is JavaScript?

JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.
JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurance of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour.

Code example of the Guess Game:
var userNumber = parseInt(prompt("What's my favorite number between 1-6"));
  while(userNumber !== 2) {
    console.log("Guess " + typeof(userNumber));
    console.log("Answer " + typeof(2));
      userNumber = parseInt(prompt("Guess again, not the right number."));
 }
  if (userNumber === 2) {
    alert("Good guess, you finally got it!");
    console.log("Good guess.");
    score += 1;
  }


alert("You answered " + score + " out 4 correct");

JOKE: 
      How do you tell HTML from HTML5?
        -Try it out in Internet Explorer
        -Did it work?
        -No??
        -It's HTML5
