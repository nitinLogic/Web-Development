//This is a number guessing game, where user enters a maximum number.
//Then guess an number between 1 & that maximum number.
//If the guess is correct you win else lose

const max = prompt("Enter the maximum number");
let guess = prompt(`Guess the number within range 1 to ${max}`);
const num = Math.floor(Math.random() * max) + 1;

while(true){
    if(guess == "quit"){
        console.log("You quit the game");
        break;
    }

    if(guess == num){
        console.log("Right answer. Congratulation!");
        break;
    }
    else if(guess < num){
        console.log('Hint: Number you guessed is very small');
    }
    else{
        console.log('Hint: Number you guessed is very large');
    }

    guess = prompt(`Wrong answer. Please try again`);
}