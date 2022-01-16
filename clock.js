const clock = document.querySelector('h2#clock');



//setInterval은 인자로 주어진 함수를 주어진 시간마다 반복실행하는 함수

// 깔끔한 방법
function sayHello(){
    clock.innerText = new Date().toLocaleTimeString();
}
sayHello()
setInterval(sayHello, 1000);


// 두번째 방법 padStart (첫번째 인자는 길이, 두번째 인자는 채울 문자)
function sayHello(){
    const data = new Date();
    const hours =  String(data.getHours()).padStart(2,"0")
    const minutes = String(data.getMinutes()).padStart(2,"0")
    const seconds = String(data.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
sayHello()
setInterval(sayHello, 1000);