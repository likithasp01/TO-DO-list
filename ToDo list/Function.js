function addTodo() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const todoList = document.getElementById("todo-list");
        
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => {
        todoList.removeChild(li);
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
    
    todoList.style.maxHeight = "450px"
    todoList.style.overflowY = "auto";
    todoList.style.overflowX = "hidden";
}
