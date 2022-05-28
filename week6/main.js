let addedTask = document.getElementById("addedTask");
let addBtn = document.getElementById("add");

addBtn.addEventListener('click', e => {
    e.preventDefault();
            
    let task = document.getElementById("newTask").value;

    //Only add the task if the input field is not empty
    if(task != ""){

    //Creating a new line
    let newLine = document.createElement("div");

    //Creating the checkbox and setting its proper attributes
    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("class", "completeTask");
    newLine.appendChild(newCheckbox);

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
    }

    //If the input task field is empty leave a message alert
    else {
        alert("Please enter a valid task");
    }
});

//Code for delete button
addedTask.addEventListener('click', e => {
    e.preventDefault();
    //If the deleteTask button is clicked
    if(e.target.classList.contains('deleteTask')){
        let deleteLine = e.target.parentNode;

        //Delete the line
        deleteLine.parentNode.removeChild(deleteLine);
    }
});

