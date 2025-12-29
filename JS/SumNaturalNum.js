//This function computes sum of first n natural numbers

function getSum(n){
    let ans = 0;
    
    for(let i = 1; i <= n; i++){
        ans += i;
    }

    return ans;
}

let n = prompt("Enter n");
console.log(getSum(n));