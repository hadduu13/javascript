
const show = () => {
    event.preventDefault();
    let n = Math.floor(Math.random() * 6) + 1 ;

    // 사용자 입력 수 : 라디오의 체크값을 찾음
    let user ;
    const radios = document.querySelectorAll('input[type = radio]');
    for(let item of radios){
        console.log(item);
        if (item.checked){
            user = item.value ;
            break;
        }
    }

    // 랜덤수와 사용자 입력수가 같은지 검사
    if(n == parseInt(user)) {
        document.querySelector('article h1').textContent = 'Dice Game : WIN';
        //console.log(n, user);
    }
    else {
        document.querySelector('article h1').textContent = 'Dice Game : TRY AGAIN'
        //console.log(n, user, "9");
    }

    // 결과출력
    document.getElementById("h2Id").innerHTML = `<img src="./img2/${n}.png">`;
    console.log(`<img src="./img2/${n}.png">`);

   
}