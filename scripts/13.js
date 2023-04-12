// function show() {
//     // alert("hello")
//     // event.preventDefault(); form reaction하지 말라고 명령
//     document.getElementById("h2Id").innerHTML = "hello";
// }

// 화살표 함수로 변경
const show = () => {
    event.preventDefault();
    // 랜덤수 생성(1~6)
    let n = Math.floor(Math.random() * 6) + 1 ;
    console.log(n);
    // document.getElementById("h2Id").innerHTML = '<img src="./img2/' + n +'.png">';
    document.getElementById("h2Id").innerHTML = `<img src="./img2/${n}.png">`;
    // 문자열 안에 변수를 쓰고 싶을 때
}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2Id").innerHTML = "시작입니다.";
// });
// function에 쓸 인수가 없으면 아무것도 안 넣어도 됨, '익명의 함수'

document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("h2Id").innerHTML = "시작입니다.";
    // document.querySelector('#h2Id').innerHTML = "아이디 선택자:시작입니다."
    // const bt = document.createElement('button');
    // bt.textContent = "확인";
    // document.getElementById('hdiv').append(bt);

});