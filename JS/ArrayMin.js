//This code computes the minimum value in an array of numbers
let a = [5,2,4,6,8,10,1,3,9,7];

function arrayMin(arr) {
    let min = a.reduce((min, el) => {
        if(el < min) {
            return el;
        } else {
            return min;
        }
    });
    console.log("Minimum value in the array is: " + min);
}
arrayMin(a);