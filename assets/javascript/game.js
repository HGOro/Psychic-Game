//options A-Z, need an array for complete alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Wins Counter
var wins = 0;
//Losses Counter
var losses = 0;
//Guesses Left Counter
var guesses = 10

//Your Guesses So Far display

//Computer Random Letter Generator (Works!)
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

//PLAYER INPUT
//When the player presses a KEY it will either +1 to wins counter, or -1 from guesses
//Need an onkey function
document.onkeypress = function(event){
    var playerGuess = event.key;

    if (playerGuess === computerChoice){
        wins++;
    }
//if playerGuess does not = computer choice, -1 from guesses
    else {
        guesses--;
    }

//If guesses reaches 0, then +1 to losses
    if (guesses === 0){
        losses++
    }


//if playerGuess does not = computerChoice, keyevent logged to Your Guesses So Far

//do I need that lowerCase converter?
    var letter= event.key.toLowerCase();

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML ="Losses: " + losses;
document.getElementById("guesses").innerHTML ="Guesses Left: " + guesses;

}


