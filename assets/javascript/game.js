$(document).ready(function() {    

    //options A-Z, need an array for complete alphabet
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //Wins Counter
    let wins = 0;
    //Losses Counter
    let losses = 0;
    //Guesses Left Counter
    let guessesLeft = 10;
    //Your Guesses So Far display.
    let wrongGuesses = [];

    //The specific computer choice for the present round.
    var letterToGuess = null;

    //Computer Random Letter Generator (Works!)
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("comp choice: " + computerChoice);

    function winImg(){
        document.getElementById("imgResult").src="assets/images/profx.jpg";    
    }

    //function to reset guessesLeft to 10 and clear wrongGuesses
    function resetVariables(){
        guessesLeft = 10;
        wrongGuesses =[];
    }

    //Function to update computerChoice to choose new letter
    function newChoice(){
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("new choice: " + computerChoice)
    }

    //PLAYER INPUT
    //When the player presses a KEY it will either +1 to wins counter, or -1 from guessesLeft
    //Need an onkey function
    document.onkeypress = function(event){
        var playerGuess = event.key.toLowerCase() || $(".value");
        //do I need that lowerCase converter?
        var letter= event.key.toLowerCase();

        if (playerGuess === computerChoice){
            wins++;
            //alert("Nice job, Professor X!");
            resetVariables();
            newChoice();
            document.getElementById('result').innerHTML = "Nice job, Professor X!";
            //document.getElementById('imgResult').innerHTML = "placeholder";
            winImg();        
        }
    //if playerGuess does not = computer choice, -1 from guessesLeft, and 
    //if playerGuess does not = computerChoice, keyevent letter logged to wrongGuesses

        else {
            guessesLeft--;
            wrongGuesses.push(letter)
        }
    //If guesses reaches 0, then +1 to losses and reset game
        if (guessesLeft === 0){
            //alert("You're no psychic!");
            losses++;
            resetVariables();
            newChoice();
            document.getElementById('result').innerHTML = "You're no psychic!";
            document.getElementById('imgResult').src="assets/images/failPic.jpg";
        }

    //HTML updates

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML ="Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML ="Guesses Left: " + guessesLeft;
    document.getElementById("wrongGuesses").innerHTML ="Guesses so far: " + wrongGuesses;
    }

    //*******------ BUTTONS --------********
    //Dynamically render the letter buttons
    for (var i = 0; i < alphabet.length; i++){
        let letterBtn = $("<button>");
        letterBtn.addClass("letter-btn")
        letterBtn.attr("data-letter", alphabet[i]);
        letterBtn.text(alphabet[i]);
        $("#letter-buttons").append(letterBtn);
    }

    //attach on click events to letter buttons
    $(".letter-btn").on("click", function(){
        //get the value of the button letter
        let btnVal = $(this).attr("data-letter");
        console.log(btnVal);

    //compare the button letter value to computer choice
        if( btnVal === computerChoice){
            wins++;
            resetVariables();
            newChoice();
            document.getElementById('result').innerHTML = "Nice job, Professor X!";
            //document.getElementById('imgResult').innerHTML = "placeholder";
            winImg();  
        } else {
            guessesLeft--;
            wrongGuesses.push(btnVal);
        }

        if (guessesLeft === 0){
            //alert("You're no psychic!");
            losses++;
            resetVariables();
            newChoice();
            document.getElementById('result').innerHTML = "You're no psychic!";
            document.getElementById('imgResult').src="assets/images/failPic.jpg";
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML ="Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML ="Guesses Left: " + guessesLeft;
        document.getElementById("wrongGuesses").innerHTML ="Guesses so far: " + wrongGuesses;
    });
});
