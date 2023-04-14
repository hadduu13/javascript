document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset");
    const txt1 = document.querySelector('#t1');

    //배열을 선언하면서 초기화
    let arr = [];

    //버튼 이벤트 추가(취소 누르면 만든 배열을 초기화 시키기)
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';        //출력된 이모지들을 전부 지우고,
        arr = [];               //배열도 비워라.
    });


    //배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e) => {   //버튼이 하는 일이 똑같기 때문에 add.event를 사용
            e.preventDefault();
            //console.log(cbt1.textContent)
            switch (cbt1.textContent) {
                case '망고':
                    arr.push('🥭');
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '딸기':
                    arr.push('🍓');
                    break;
            } console.log(arr)
            txt1.value = arr.join('');  //input type으로 받는건 value로 출력할 수 있음
        });
    }

    //배열에서 자료 삭제
    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();
            let gubun = cbt2.textContent.replace('삭제', '');      //코드에 굳이 '망고삭제'를 치지 않고 '망고'만 쳐도 되게 만듦.
            let temp = [];
            for (let item of arr) {
                switch (gubun) {
                    case '망고':                                   //'망고취소' 버튼을 누르면,
                        if (item != '🥭') temp.push(item);        //망고 이모지를 
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '딸기':
                        if (item != '🍓') temp.push(item);
                        break;
                }
            }
            arr = temp;
            // switch(cbt2.textContent){
            //     case '망고 삭제' :
            //         arr = arr.filter((item)=>item !='🥭');  //배열에 있는 걸 한 개씩 가져옴, 새로운 arr를 만들어서 삭제한 과일을 담는 배열을 그곳에 새로 담음
            //         break;
            //     case '바나나 삭제' :
            //         arr = arr.filter((item)=>item !='🍌');
            //         break;
            //     case '오렌지 삭제' :
            //         arr = arr.filter((item)=>item !='🍊');
            //         break;
            //     case '딸기 삭제' :
            //         arr = arr.filter((item)=>item !='🍓');
            //         break;
            // } console.log(cbt2,arr)
            txt1.value = arr.join('');  //input type으로 받는건 value로 출력할 수 있음
        });
    }

    //배열에서 자료 교체
    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();
            let gubun = cbt3.textContent.split('->')[0] //split은 문자열을 나눔, '->'을 기준으로 딸기, 당근으로 나눔. [0]:문자열 두 개 중 0번째인 딸기만 사용하겠다. '딸기'만 case문에 쳐도 인식할 수 있게 만듦
            //console.log(gubun)

            let temp = [];
            for (let item of arr) {                                     //arr에 들어오는 모든 아이템(이모지)를 확인하겠다.
                switch (gubun) {                                       //gubun은 배열
                    case '망고':                                      //'망고'를 선택하면,
                        if (item == '🥭') temp.push('🥑');          //item이 망고 이모지면 아보카도 이모지로 교체해라.                   
                        else temp.push(item);                       //그렇지 않으면 그대로 망고 이모지를 출력해라.
                        break;
                    case '바나나':
                        if (item == '🍌') temp.push('🥒');
                        else temp.push(item);
                        break;
                    case '오렌지':
                        if (item == '🍊') temp.push('🥬');
                        else temp.push(item);
                        break;
                    case '딸기':
                        if (item == '🍓') temp.push('🥕');
                        else temp.push(item);
                        break;
                }console.log(cbt3, arr)
            }
            arr = temp;                                         //temp를 arr에 집어넣어라.
            txt1.value = arr.join('');                         //join(',');이면 이모지들 사이에 ,가 들어간 상태로 출력.
        });
    }


});