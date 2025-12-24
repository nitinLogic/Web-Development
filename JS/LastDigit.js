//This code checks if two numbers have the same last digit
let a = prompt("Enter first number");
let b = prompt("Enter second number");

if((a % 10) == (b % 10))
    console.log("Yes");
else
    console.log("No");