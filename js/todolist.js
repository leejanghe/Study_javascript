const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}


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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

//  json.parse는 문자열을 객체로 변환하는 함수
//  JSON.stringify는 객체를 문자열로 변환하는 함수
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}