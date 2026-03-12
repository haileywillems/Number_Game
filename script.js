//generate a random number between 1-100

let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);

let attempts = 0;
//function to check users guess

function checkGuess(){
    const guessInput = document.getElementById('guess');
    const feedback = document.getElementById('feedback');

    const userGuess = parseInt(guessInput.value);

    // console.log(guessInput.value);

    if(!userGuess || userGuess <1 || userGuess > 100){
        feedback.textContent='Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;

    if(userGuess === randomNumber){
        feedback.textContent = `Congradulations! Your guessed the number in ${attempts} attempts.`;
        feedback.style.color="Green";
    }
    else if(userGuess > randomNumber){
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color="Red";
    }
    else{
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color="Red";
    }
}

function resetGame(){
    randomNumber = Math.floor(Math.random()*100)+1;
    attempts=0;
    document.getElementById('guess').value='';
    document.getElementById('feedback').textContent='';
}