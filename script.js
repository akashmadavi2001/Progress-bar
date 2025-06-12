let circle = document.querySelector('.circle');
let num = document.querySelector('.num');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let value = 0;
    btn.innerHTML = 'Wait...';
    let timeout = setInterval(() => {
        value++;
        if (value == 100) {
            clearInterval(timeout);
            btn.innerHTML = 'Try again';
        };
        num.innerHTML = value + "%";
        circle.style.background = 'conic-gradient(#00b3ff ' + value * 3.6 + 'deg, lightblue ' + value * 3.6 + 'deg)';
    }, 100);
});
