const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo){
    const liTag = document.createElement('li');
    const spanTag = document.createElement('span')
    liTag.appendChild(spanTag);
    spanTag.innerText = newToDo;
    toDoList.appendChild(liTag);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);