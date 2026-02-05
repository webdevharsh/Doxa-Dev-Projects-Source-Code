// Doxa Dev 
let container = document.querySelector(".container");
let gameBox = container.querySelector(".game-box");
let gameOverBox = container.querySelector(".game-over-box");
let userInput = gameBox.querySelector(".user-input input");
let guessBtn = gameBox.querySelector(".user-input button");
let lowToHigh = gameBox.querySelector(".guesses .high-to-low");
let noOfGuesses = gameBox.querySelector(".guesses .no-of-guesses");
let guessed_numbers = gameBox.querySelector(".guesses .guessed-number-are");
let playAgainBtn = gameOverBox.querySelector("button");
let resultTxt = gameOverBox.querySelector("h3");

let correctGuess; // Variable to store the correct guess
let guessed_number_are = []; // Array to store previously guessed numbers
let noOfChances = 3; // Initial number of chances

// Function to generate a random number between 1 to 20 
let generateRandomNumber =() =>{
    let randomNumber = Math.floor(Math.random() * 20);
    correctGuess = randomNumber; // Store the generated number as the correct guess
    console.log(correctGuess);
}

// Function to handle user's guess 
let guess =() =>{
    let userGuess = userInput.value; // Get the user's guess
    // Check if the guess is incorrect 
    if(userGuess !== correctGuess){
        noOfChances--; // Decrement the number of chances
        noOfGuesses.innerHTML = `No of chances: ${noOfChances}`; // Update the number of chances display

        // Add the guess to the array of previously guessed numbers 
        guessed_number_are.push(userGuess);
        guessed_numbers.innerHTML = `Guessed number are: ${guessed_number_are}`;

        if(userGuess < correctGuess){ // Check if the guess is low
            lowToHigh.innerHTML = "Your guess is low!"; // Display "Your guess is low" message
        }else if(userGuess > correctGuess){ // Check if the guess is high
            lowToHigh.innerHTML = "Your guess is high!"; // Display "Your guess is high" message
        }

        // Check if the user has run out of chances 
        if(noOfChances == 0){
            gameBox.style.display = "none";
            gameOverBox.style.display = "block";
            resultTxt.innerHTML = "You lost the game! 😕";
        }

        // Display the "Your guess is low/high" message 
        lowToHigh.style.display = "block";
        userInput.value = "";
    }

    // Check if the guess is correct 
    if(userGuess == correctGuess){
        gameBox.style.display = "none";
        gameOverBox.style.display = "block";
        resultTxt.innerHTML = "You won the game! 🥳"; 
    }
}

// Add event listener to play again button 
playAgainBtn.addEventListener("click", () =>{
    noOfChances = 3;
    guessed_number_are = [];
    gameBox.style.display = "block";
    gameOverBox.style.display = "none";
    lowToHigh.style.display = "none";
    noOfGuesses.innerHTML = "No of chances: 3";
    guessed_numbers.innerHTML = "Guessed number are: ------";
    generateRandomNumber();
})


// Add event listener to guess button 
guessBtn.addEventListener("click", () =>{
    // Check if the input field is not empty 
    if(userInput.value.trim() != ""){
        guess(); // Call the guess function
    }
})

// Generate a Random number on page load 
generateRandomNumber();