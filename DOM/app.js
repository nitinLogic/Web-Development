let btn = document.createElement('button');
btn.innerText = 'Click Me';
document.querySelector('body').append(btn);

btn.addEventListener("click", function(){
    console.dir(btn);
    this.style.backgroundColor = "green";
});