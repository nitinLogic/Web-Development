let favMovie = "dhurandhar";
let guess = prompt("Guess my favourite movie name");

while(guess != "dhurandhar" && guess != "quit"){
    guess = prompt("Wrong guess. Please try again");
}

if(guess == "quit")
    alert("Better luck next time!");
else
    alert("Congratulations! Right Answer");