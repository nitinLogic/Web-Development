let cel = document.querySelector('#cel');
let far = document.querySelector('#far');
let kel = document.querySelector('#kel');

cel.addEventListener('input', function(){
    let val = parseFloat(this.value);

    far.value = (32 + (val * (9 / 5))).toFixed(2);
    kel.value = (val + 273.15).toFixed(2);
});

far.addEventListener('input', function(){
    let val = parseFloat(this.value);
    
    cel.value = ((val - 32) * (5 / 9)).toFixed(2);;
    kel.value = (parseFloat(cel.value) + 273.15).toFixed(2);
});

kel.addEventListener('input', function(){
    let val = parseFloat(this.value);
    
    cel.value = (val - 273.15).toFixed(2);
    far.value = (32 + (parseFloat(cel.value) * (9 / 5))).toFixed(2);
});