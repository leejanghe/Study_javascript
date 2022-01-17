const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
]


// 렌덤으로 이미지를 보여주는 변수
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지를 보여주는 요소를 선택한다.
const bgImage = document.createElement('img');

// 이미지를 보여주는 요소에 이미지를 설정 (src는 이미지 경로)
bgImage.src = `img/${chosenImage}`;

console.log(bgImage)

// appendChild메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
document.body.appendChild(bgImage);