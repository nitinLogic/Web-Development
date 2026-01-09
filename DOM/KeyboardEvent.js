let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    //console.log("code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code == "ArrowUp"){
        console.log("Character moves forward");
    } else if(event.code == "ArrowDown"){
        console.log("Character moves backward");
    } else if(event.code == "ArrowLeft"){
        console.log("Character moves left");
    } else if(event.code == "ArrowRight"){
        console.log("Character moves right");
    }
});