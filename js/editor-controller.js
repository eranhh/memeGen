'use strict'

function renderMemeToCanvas() {
    var img = new Image();
    img.src = `img/${gMeme.currImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        gMeme.lines.forEach(function(line) {
            drawText(line.txt, line.x, line.y, line)
        })
    }
}

function drawText(text, x, y, line) {
    gCtx.lineWidth = '1.25'
    gCtx.strokeStyle = line.stroke
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = line.align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetText() {
    var textInput = document.querySelector('#text-input').value
    setText(textInput)
    renderMemeToCanvas()
}

function onSetMemeImg(img) {
    setMemeImg(img)
    renderMemeToCanvas()
}

function onClearText() {
    clearText()
    renderMemeToCanvas()
    document.querySelector('#text-input').value = ''
}

function onChangeAlign(align) {
    changeAlign(align)
    renderMemeToCanvas()
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderMemeToCanvas()
}

function onChangeFontType(fontName) {
    changeFontType(fontName)
    renderMemeToCanvas()
}

function onChangeStrokeColor(userColor) {
    changeStrokeColor(userColor)
    renderMemeToCanvas()
}

function onChangeFillColor(userColor) {
    changeFillColor(userColor)
    renderMemeToCanvas()
}

function onMoveLine(diff) {
    changeLinePos(diff)
    renderMemeToCanvas()
}

function onAddLine() {
    addLine()
    renderMemeToCanvas()
    var textInput = document.querySelector('#text-input')
    textInput.value = gMeme.lines[gMeme.currLineIdx].txt
    gTextInput.focus()
}

function onSwitchZone() {
    switchZone()
    renderMemeToCanvas()
    var textInput = document.querySelector('#text-input')
    textInput.value = gMeme.lines[gMeme.currLineIdx].txt
    gTextInput.focus()
}

function goToPrevLine() {
    findPrevLineIdx()
    renderMemeToCanvas()
    var textInput = document.querySelector('#text-input')
    textInput.value = gMeme.lines[gMeme.currLineIdx].txt
    gTextInput.focus()
}

function goToNextLine() {
    findNextLineIdx()
    renderMemeToCanvas()
    var textInput = document.querySelector('#text-input')
    textInput.value = gMeme.lines[gMeme.currLineIdx].txt
    gTextInput.focus()
}

function onClearAll() {
    if (confirm('Are you sure?')) {
        clearAll()
        renderMemeToCanvas()
        var textInput = document.querySelector('#text-input')
        textInput.value = gMeme.lines[gMeme.currLineIdx].txt
    }
}

function onDownload(elLink) {
    downloadCanvas(elLink)
}














// function renderCanvas(img) {
//     gCanvas.width = img.width;
//     gCanvas.height = img.height;
//     gCtx.drawImage(img, 0, 0);
//     // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// }