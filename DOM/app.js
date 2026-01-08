let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add("red");

let heading1 = document.createElement('h3');
heading1.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading1);
heading1.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "I'm in dev";
p.innerText = "ME TOO!";

div.append(h1);
div.append(p);
document.querySelector('body').append(div);
div.classList.add('box');