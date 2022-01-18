const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const API_KEY = 'your api key';

function onGeoOk(position){
    // 로컬 위치 좌표
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url)

    // fetch(url) 해서 꼭 어플리케이션 네트워크 확인 해보기
    // preview에서 객체 확인하기
    fetch(url)
    .then((res)=> res.json())
        .then((data)=>{
            console.log('11111',data.weather[0].main , data.name)

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError(){
    alert('Geolocation error');
}

// 위치 정보 요청 함수 매우 유용
// 첫번째 파라미터는 성공시 콜백함수, 두번째 파라미터는 실패시 콜백함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

