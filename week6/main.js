let addedTask = document.getElementById("addedTask");
let addBtn = document.getElementById("add");
let counter = document.getElementById("counter");
let pendingTask = document.getElementById("pending");
let counterTask = 0;
let pending = 0;

addBtn.addEventListener('click', e => {
    e.preventDefault();
            
    let task = document.getElementById("newTask").value;

    //Only add the task if the input field is not empty
    if(task != ""){

    //Creating a new line
    let newLine = document.createElement("div");

    //Creating the complete button and setting its proper attributes
    let newCheck = document.createElement("input");
    newCheck.setAttribute("type", "button");
    newCheck.setAttribute("class", "completeTask");
    newCheck.setAttribute("value", "DONE");
    newLine.appendChild(newCheck);

    //Creating the text field with the task added previously
    let newTaskName = document.createElement("input");
    newTaskName.setAttribute("type", "text");
    newTaskName.setAttribute("value", task);
    newTaskName.setAttribute("readonly", "true")
    newLine.appendChild(newTaskName);

    //Adding a delete button
    let newDelete = document.createElement("input");
    newDelete.setAttribute("type", "button");
    newDelete.setAttribute("value", "X");
    newDelete.setAttribute("class", "deleteTask");
    newLine.appendChild(newDelete);

    //Appeding everything into the new line
    addedTask.appendChild(newLine);

    //Making the new task line blank
    document.getElementById("newTask").value = "";

    //Focusing the line getting ready for entering the new task
    document.getElementById("newTask").focus();
    
    //Couting how many tasks there are
    counterTask++;
    counter.innerHTML="You have " + counterTask + " tasks in your list";

    pending++;
    pendingTask.innerHTML = "and " + pending + " pending tasks";


    }

    //If the input task field is empty leave a message alert
    else {
        alert("Please enter a valid task");
    }
});

//DELETE BUTTON
addedTask.addEventListener('click', e => {
    e.preventDefault();
    //If the deleteTask button is clicked
    if(e.target.classList.contains('deleteTask')){
        let deleteLine = e.target.parentNode;

        //Delete the line
        deleteLine.parentNode.removeChild(deleteLine);

        //Couting how many tasks there are
        counterTask--;
        counter.innerHTML="You have " + counterTask + " tasks in your list";

        if (pending != 0) {
            pending--;
        }
        pendingTask.innerHTML = "and " + pending + " pending tasks";
        
    }
});

//COMPLETED TASK BUTTON
//When this button is clicked the task description turns into red
addedTask.addEventListener('click', e => {
    e.preventDefault();
    //If the completeTask button is clicked
    if(e.target.classList.contains('completeTask')){
        let completed = e.target.parentNode;

        //Turns into red
        completed.childNodes[1].setAttribute("style","text-decoration: line-through");

        
        if (pending != 0) {
            pending--;
        }
        pendingTask.innerHTML = "and " + pending + " pending tasks";
    }
});
