//This code checks if every number in an array is a multiple of ten
let a = [10,20,30,40,50];

let result = a.every((el) => el % 10 == 0);
console.log(result);