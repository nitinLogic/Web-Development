//Q1
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Q2
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

//Q3
let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");


//Q4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practise</u>";
document.querySelector('body').append(h1);
h1.classList.add('purple');

//Q5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practise";
document.querySelector('body').append(p);