//알고리즘 영역
//회문확인 구하기
const palindrome = (t1, t2) => {
    let s = t1.value;

    //입력내용이 없는 경우
    if (s.length == 0) {
        document.querySelector('h2').textContent = '단어를 입력하세요'
        return;
    }
    
    //입력내용이 있는 경우
    
    let rs = '' ;
    //case1
    // for(let i = s.length -1; i >=0; i--){
    //     rs = rs + s[i] ;
    // } 

    //case2 배열
    s = s.split(''); //문자열.split(''); 는 문자열을 분리자로 분리해서 배열을 만듦
    s = s.reverse(); //배열.reverse(); 만든 문자열을 뒤집음
    rs = s.join('');   //배열.join(''); 배열의 요소를 문자열로 묶어줌
    console.log('s=',s, ',rs =', rs); 
    //결과확인
    if (t1.value == rs) {
        t2.value = "회문입니다.";  //form 태그>input 타입에는 id.value라고 해야 출력할 수 있음
    } 
    else {
        t2.value = "회문이 아닙니다.";
    }

}

//숫자합계 구하기
const numSum = (t1, t2) => {
    let s = t1.value;
    let sum = 0;

    //문자열 순회
    for(let ch of s){
        if(!isNaN(ch)){
            sum = parseInt(ch) + sum
        } t2.value = sum;
    }
}

//javascript 영역
document.addEventListener("DOMContentLoaded", ()=>{

    //DOM요소 가져오기
    const text1 = document.querySelector('#t1');
    const text2 = document.querySelector('#t2');
    const bts = document.querySelectorAll('.bt');

    //버튼배열에 클릭이벤트 작성
    for(let bt of bts){
        bt.addEventListener('click', (event)=>{
            //새로고침을 못하게 만듦
            event.preventDefault();
            let dist = bt.getAttribute('id').slice(-1); //-1을 하면 bt1에서 bt를 없애고 1만 남김 
            //get.Attribute 는 배열(문자열)을 나타냄, bt라는 버튼이 두 개가 있으므로 각자 어떤 버튼인지 구분하기 위하여 숫자로 구분(1버튼 or 2버튼) 
            //다른 걸로 구분할 수도 있음(예; '회문확인' or '숫자합계')
             if (dist === '1')                         
             palindrome(t1, t2);     
             else numSum(t1, t2);

        });
    }
});