// 이렇게도 찾을 수 있음
const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const h1tag = document.querySelector('#greeting')


// preventDefault는 브라우저 기본 동작을 제어(새로고침, 페이지 이동 등)
function onLoginBtnClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden")
    localStorage.setItem('username', username)
    paintGreetings(username)
}

// 그냥 클래스 네임을 사용해서 진행해도 상관없지만 변수를 지정해서 사용하면 이해하기 쉬움
// 추가적으로 반복적인 스트링이 있다면 대문자로 작성해서 분리(오류를 방지하기 위함)
function paintGreetings(username){
    h1tag.innerText = `Hello ${username}`
    h1tag.classList.remove('hidden')
}

// localStorage에 저저장된 값을 가져오는 함수(getItem)
// setItem은 저장하는 함수
const savedUsername = localStorage.getItem('username');

if(savedUsername === null){
    loginForm.classList.remove('hidden')
    loginForm.addEventListener('submit', onLoginBtnClick)
}else{
    paintGreetings(savedUsername)
}