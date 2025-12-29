function rollDice(){
    let num = Math.floor(Math.random() * 6) + 1;

    console.log(num);
}

let request = prompt("Type roll to roll the dice or quit");
while(true){
    if(request == "roll")
        rollDice();
    else if(request == "quit"){
        console.log("You quit");
        break;
    }

    request = prompt("Type roll to roll the dice or quit");
}