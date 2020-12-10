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


function uploadImg(ev) {
    ev.preventDefault();
    var elForm = document.querySelector('form');
    gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function(err) {
            console.error(err)
        })
}