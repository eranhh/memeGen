'use strict'

var gGalleryShow = document.querySelector('.gallery-section')
var gMemesShow = document.querySelector('.memes-section')
var gEditorShow = document.querySelector('.editor-section')
var gGalleryLink = document.querySelector('.gallery-link')
var gMemesLink = document.querySelector('.memes-link')
var gEditorLink = document.querySelector('.editor-link')

function displayEditor() {
    gGalleryShow.style.display = 'none'
    gMemesShow.style.display = 'none'
    gEditorShow.style.display = 'block'
    gGalleryLink.style.color = 'whitesmoke';
    gMemesLink.style.color = 'whitesmoke';
    gEditorLink.style.color = '#ebce70';
}

function displayGallery() {
    gMemesShow.style.display = 'none'
    gEditorShow.style.display = 'none'
    gGalleryShow.style.display = 'block'
    gMemesLink.style.color = 'whitesmoke';
    gEditorLink.style.color = 'whitesmoke';
    gGalleryLink.style.color = '#ebce70';
}


function displayMemes() {
    gEditorShow.style.display = 'none'
    gGalleryShow.style.display = 'none'
    gMemesShow.style.display = 'block'
    gGalleryLink.style.color = 'whitesmoke';
    gEditorLink.style.color = 'whitesmoke';
    gMemesLink.style.color = '#ebce70';
}