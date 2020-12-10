'use strict'


function onSetText() {
    var textInput = document.querySelector('#text-fill').value
    setText(textInput)
        // document.querySelector('#text-fill').value = ''
}


function draw(ev) {
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    switch (gMeme.selectedLineIdx) {
        case 0:
            drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, 50)
                // case 'text2':
                //     drawText(gTextInput, 225, 225)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = '1'
    gCtx.strokeStyle = '#ff4500'
    gCtx.fillStyle = '#ff4500'
        // gCtx.font = '40px Ariel'
    gCtx.font = 'italic small-caps 900 68px serif'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
    // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}


function drawImgFromGallery(imgId) {
    var img = new Image();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}