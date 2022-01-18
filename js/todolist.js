const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");



// 버튼 클릭시 parentElement를 활용해 어떠한 버튼인지 확인하고 삭제하는 함수
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
}


// append는 마지막에 추가해야 합니다.
function paintToDo(newToDo){
    const liTag = document.createElement('li');
    const spanTag = document.createElement('span')
    spanTag.innerText = newToDo;

    const button = document.createElement('button')
    button.addEventListener('click', deleteToDo)
    button.innerText =  "❌";
    liTag.appendChild(spanTag);
    liTag.appendChild(button);
    toDoList.appendChild(liTag);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);