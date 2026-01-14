let inp = document.querySelector("input");

inp.addEventListener("input", function(event){
    let currentValue = event.target.value;
    // Use a regular expression to replace any character that is *not* a letter or a space
    // The regex /[^A-Za-z ]/g matches any character NOT in the set
    let filteredValue = currentValue.replace(/[^A-Za-z ]/g, '');

    let h1 = document.querySelector("h1");
    h1.textContent = filteredValue;
});