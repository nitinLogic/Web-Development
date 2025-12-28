let todo = [];
let req = prompt("Enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting the app")
        break;
    }
    else if(req == "list"){
        let i = 0;

        console.log("----------");
        for(task of todo){
            console.log(i, task);
            i++;
        }
        console.log("----------");
    }
    else if(req == "add"){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("Task added");
    }
    else if(req == "delete"){
        let index = prompt("Enter the index");
        todo.splice(index, 1);
        console.log("Task deleted");
    }
    else{
        console.log("Wrong request");
    }

    req = prompt("Enter your request");
}