'use strict'

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function plusOrMinus() {
    const plusOrMinus = (getRandomInt(0, 2) > 0.5) ? 1 : -1;
    return plusOrMinus;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
        // You may clear part of the canvas
        // gCtx.clearRect(50, 50, 100, 100)
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log(data)
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}


function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}