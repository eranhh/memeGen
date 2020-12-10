'use strict'

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
}


function renderGallery() {
    var imgs = gImgs
    var strHtmls = imgs.map(function(img) {
        return `<a href="#editor"><img src="img/${img.id}.jpg" onclick="setMemeImg('${img.id}'),drawMemeToCanvas(), displayEditor()"></a>`
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('')
}