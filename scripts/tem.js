
//addeventlistener=DOM이 완성되면 없던 이벤트를 내가 넣겠다. 
//값을 가지고 오고 싶거나 넣고 싶을때 inner.HTML or text.content 사용
document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1')
    const sel2 = document.querySelector('#sel2')

    const d1 = document.querySelector('#d1')
    const d2 = document.querySelector('#d2')

    const t1 = document.querySelector('#t1')
    const t2 = document.querySelector('#t2')

    //단위표시
    d1.textContent = sel1.value;
    d2.textContent = sel2.value;


    //select 값이 변경 될 때
    sel1.addEventListener('change', (event) => {
        d1.textContent = event.target.value;
        t1.value = '';
    });
    sel2.addEventListener('change', (event) => {
        d2.textContent = event.target.value;
        t2.value = '';
    });

    //input에 값이 입력 되었을때
    t1.addEventListener('input', (event) => {
        if (sel1.value == sel2.value) {
            t2.value = t1.value;
        }
        else if (sel1.value == '℃') {
            //섭씨온도 -> 화씨온도
            t2.value = (t1.value * (9 / 5)) + 32;
        }
        else if (sel1.value == '℉' && sel2.value == '℃') {
            //화씨온도-> 섭씨온도
            t2.value = (t1.value - 32) / 1.8;
}
    }); 
    


    
});