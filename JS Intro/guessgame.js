var secretNumber = 4;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

else if(guess > 4) {
    alert("WRONG! Too high.");
}

else {
    alert("WRONG! Too low.")
}