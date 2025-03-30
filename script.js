let bar = document.getElementById('circular-bar');
let values = document.getElementById('value');
let progressValue = 0;
let progressEnd = 100;
let speed = 100;

let porgress = setInterval(() => {
    progressValue++;
    if (progressValue == progressEnd) {
        clearInterval(porgress)
    }
    values.textContent =`${ (progressValue < 10 ? '0' : '') + progressValue}%`;
    bar.style.background = `conic-gradient(rgb(0, 136, 255) ${progressValue * 3.6}deg, lightblue ${progressValue * 3.6}deg)`;
}, speed);
