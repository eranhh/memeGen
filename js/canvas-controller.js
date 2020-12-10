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


// function renderCanvas(img) {
//     gCanvas.width = img.width;
//     gCanvas.height = img.height;
//     gCtx.drawImage(img, 0, 0);
//     // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// }


function drawMemeToCanvas() {
    var img = new Image();
    img.src = `img/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        switch (gMeme.selectedLineIdx) {
            case 0:
                drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, 50)
                break
            case 1:
                drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 250, 450)
        }
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].stroke
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px ${gMeme.lines[gMeme.selectedLineIdx].font}`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}