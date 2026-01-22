let bill = document.querySelector('#bill');
let tip = document.querySelector('#tip');
let btn = document.querySelector("button");

function total(bill, per){
    return bill * (1 + (per / 100));
}

btn.addEventListener("click", function(){
    let ans = document.querySelector('.total');
    let val = total(bill.value, tip.value).toFixed(2);
    ans.innerHTML = `<p>Total: <b>${val}</b></p>`;
});