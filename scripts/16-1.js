document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector('#bt1');

    bt1.addEventListener('click', () => {
        event.preventDefault();
        let n = Math.floor(Math.random() * 6) + 1;
        let user;
        const radios = document.querySelectorAll('input[type = radio]');
        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                break;
            }
        }

        if (n == parseInt(user)) {
            document.querySelector('article h1').textContent = 'Dice Game : YOU WIN';
            //console.log(n, user);
        }
        else {
            document.querySelector('article h1').textContent = 'Dice Game : TRY AGAIN'
            //console.log(n, user, "9");
        }

        // 결과출력
        document.getElementById("h2Id").innerHTML = `<img src="./img2/${n}.png">`;
        console.log(`<img src="./img2/${n}.png">`);
    });

});