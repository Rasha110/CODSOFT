
document.getElementById("btn").addEventListener("click", Add);

function Add(){
    let input = document.getElementById("input");
    let text = document.querySelector(".text");
    if (input.value == "") 
        {
        alert("Please enter task!");
    } 
    else 
    {
        let toDoList=document.createElement("ul");
            let taskText=document.createElement("li");

        taskText.textContent=input.value;

        let editIcon=document.createElement("i");
        editIcon.className="fa-solid fa-pen";

        let trashIcon = document.createElement("i");
        trashIcon.className="fa-solid fa-trash";

     toDoList.appendChild(taskText);     
     toDoList.appendChild(editIcon);
        toDoList.appendChild(trashIcon);
               text.appendChild(toDoList);
        input.value ="";

        trashIcon.addEventListener("click", remove);

        editIcon.addEventListener("click", edit);

function remove() {
        toDoList.remove();
        }

        function edit() {
            let currentText= taskText.textContent.trim();
            let editText =prompt("Edit your task:", currentText);
            if (editText!==null&&editText !== "") {
                taskText.textContent = editText;
            }
        }
}
}

