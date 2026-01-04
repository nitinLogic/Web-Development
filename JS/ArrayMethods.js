//Q1 - Arrow method example
let nums = [1,2,3,4,5];
let square = nums.map((n) => (n * n));
console.log(square);

let sum = square.reduce((acc, el) => (acc + el));
let avg = sum / nums.length; 
console.log(avg);


//Q2 - Map method example
let nums1 = [1,2,3,4,5];
let newNums = nums1.map((el) => (el + 5));
console.log(newNums);


//Q3 - forEach method example
let str = ["nitin", "anjali", "janki", "birender"];
let newStr = str.map((string) => {
    return string.toUpperCase();
});
console.log(newStr);


//Q4 - Rest method for arrays
function doubleAndReturnArgs(arr, ...args){
    let square = args.map((el) => (el * el));
    return [...arr, ...square]
}
let arr = [1,2,3,4,5];
console.log(doubleAndReturnArgs(arr, 6,7,8));


//Q5 - Spread method for objects
function mergeObjects(a, b){
    let obj = {...a, ...b};
    return obj;
}
const obj1 = {
    a:10,
    b:20,
};
const obj2 = {
    c:30,
    d:40,
};
console.log(mergeObjects(obj1, obj2));