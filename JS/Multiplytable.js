//This function prints multiplication table of any given number

function multiplicationTable(n){
    console.log("----------");
    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
    console.log("----------");
}

let n = prompt("Enter a number");
multiplicationTable(n);