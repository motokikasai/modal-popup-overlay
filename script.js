
function randomGenerator() {
    let hue = `rgb( ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))} )`;
    let randomColorcontainer = document.getElementById('random-color-container').style.background=hue;
}

const colorSwitcher = document.getElementById('random-color');
colorSwitcher.addEventListener('click', randomGenerator)