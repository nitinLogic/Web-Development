//Q1-This function returns array elements larger than a number
function largerElements(arr, n){
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            ans.push(arr[i]);
        }
    }

    return ans;
}
let a = [5,4,1,7,3];
let n = 3;
console.log(largerElements(a,n));


//Q2-This function extracts unique characters from a string
function uniqueCharacters(str){
    let ans = "";
    
    for(let i = 0; i < str.length; i++){
        let currChar = str[i];

        if(!ans.includes(currChar))
            ans += str[i];
    }
    
    return ans;
}
let str = "abcdabcdefgggh";
console.log(uniqueCharacters(str));


//Q3-This function returns the longest country name from a list
function longestName(country){
    let longest = country[0];
    for(let i = 1; i < country.length; i++){
        if(country[i].length > longest.length)
            longest = country[i];
    }

    return longest;
}
let country = ["Australia", "Germany", "United States of America"];
console.log(longestName(country));


//Q4-This function counts vowels in a given string
function isVowel(ch){
    let arr = ['a', 'e', 'i', 'o', 'u'];
    if(arr.includes(ch))
        return true;

    return false;
}
function countVowels(str){
    let vowel = 0;

    for(let i = 0; i < str.length; i++){
        if(isVowel(str[i]))
            vowel++;
    }

    return vowel;
}
console.log(countVowels("nitin yadav"));


//Q5-This function generates random number within given range
function randomNumGenerator(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(randomNumGenerator(200, 500));

