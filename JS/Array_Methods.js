let start = ['january', 'july', 'march', 'august'];
start.splice(0, 2, 'july', 'june');
console.log(start);

let language = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
let idx = language.reverse().indexOf('javascript');
console.log(idx);


//Get the first n elements of an array
let arr = [7,9,0,-2];
let n = 3;
console.log(arr.slice(0, n));

//Get the last n elements of an array
console.log(arr.slice(-n));

//Check wether string is empty or not
let str = "nitin";
if(str.length == 0)
    console.log("Empty String");
else
    console.log("Not empty");

//Check if character at given index is lower case or not
let input = prompt("Enter a string");
let index = 2;
let ch = input[index];
if(ch >= 'a' && ch <= 'z'){
    console.log("Lower case");
}
else{
    console.log("Upper case");
}


//Check if an element exist in an array or not
let num = [2,3,4,5,6];
if(num.includes(5))
    console.log("yes");
else
    console.log("no");