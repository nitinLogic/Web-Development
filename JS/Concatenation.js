//This function returns a concatenated string of all strings in an array
function finalString(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        ans = ans + str[i];
    }
    return ans;
}

let str = ["Hi", "I'm", "Nitin", "Yadav"];
console.log(finalString(str));