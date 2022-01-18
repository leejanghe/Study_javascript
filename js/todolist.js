const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos';

// scope를 위해 전역변수로 선언
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}


// 버튼 클릭시 parentElement를 활용해 어떠한 버튼인지 확인하고 삭제하는 함수
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}


// append는 마지막에 추가해야 합니다.
// todolist 제거하기 위해 id값 부여
function paintToDo(newToDo){
    const liTag = document.createElement('li');
    liTag.id = newToDo.id;
    const spanTag = document.createElement('span')
    spanTag.innerText = newToDo.text;

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
    // storge에 저장된 값을 삭제하기 위해 객체로 만든다.
    const newToDoObj ={
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// local storge에 저장
const savedToDos = localStorage.getItem(TODOS_KEY);

//  json.parse는 문자열을 객체로 변환하는 함수
//  JSON.stringify는 객체를 문자열로 변환하는 함수
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}

