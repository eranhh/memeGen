'use strict'

var gGalleryShow = document.querySelector('.gallery-section')
var gMemesShow = document.querySelector('.memes-section')
var gEditorShow = document.querySelector('.editor-section')
var gGalleryLink = document.querySelector('.gallery-link')
var gMemesLink = document.querySelector('.memes-link')
var gEditorLink = document.querySelector('.editor-link')
var gTextInput = document.querySelector('input[name=text-input]')

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    gFilterBy = 'All'
    renderGallery()
    renderKeywords()
}

function displayEditor() {
    gGalleryShow.style.display = 'none'
    gMemesShow.style.display = 'none'
    gEditorShow.style.display = 'block'
    gGalleryLink.style.color = 'whitesmoke';
    gMemesLink.style.color = 'whitesmoke';
    gEditorLink.style.color = '#ebce70';
    gTextInput.focus()
    window.scrollTo(0, 0)
}

function displayGallery() {
    gMemesShow.style.display = 'none'
    gEditorShow.style.display = 'none'
    gGalleryShow.style.display = 'block'
    gMemesLink.style.color = 'whitesmoke';
    gEditorLink.style.color = 'whitesmoke';
    gGalleryLink.style.color = '#ebce70';
    window.scrollTo(0, 0)
}

function displayMemes() {
    gEditorShow.style.display = 'none'
    gGalleryShow.style.display = 'none'
    gMemesShow.style.display = 'block'
    gGalleryLink.style.color = 'whitesmoke';
    gEditorLink.style.color = 'whitesmoke';
    gMemesLink.style.color = '#ebce70';
    window.scrollTo(0, 0)
}

function renderGallery() {
    var imgs = getImgsForDisplay()
    var strHtmls = imgs.map(function(img) {
        return `<a href="#editor"><img src="img/${img.id}.jpg" onclick="onSetMemeImg('${img.id}'); displayEditor();return false"></a>`
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('')
}

function renderKeywords() {
    var keywords = keywordsToDisplay()
    var strHtmls = keywords.map(function(keyword) {
        var initialSize = 21 + keyword.count
        return `<button style="font-size:${initialSize}px;" class="filter-btn ${keyword.keyword}" onclick="onSetFilter('${keyword.keyword}'),onIncreaseKeyFontSize('${keyword.keyword}')">${keyword.keyword}</button>`;
    })
    document.querySelector('.keywords-bar').innerHTML = strHtmls.join('')
}

function onSetFilter(filterBy) {
    setFilter(filterBy);
    renderGallery();
}

function onIncreaseKeyFontSize(txt) {
    var keyIdx = gKeywords.findIndex(idx => idx.keyword === txt);
    gKeywords[keyIdx].count++;
    renderKeywords()
}

function onDisplayFilters() {
    var elBtnText = document.querySelector('.filters-display-btn')
    if (!gKeywordsFullDisplay) {
        gKeywordsFullDisplay = true;
        elBtnText.innerText = 'Less!'
    } else {
        gKeywordsFullDisplay = false;
        elBtnText.innerText = 'More...'
    }
    renderKeywords()
}

















// function onOpenMenu() {
//     var elMenu = document.body.classList.toggle('menu-bar')
//     if (elMenu) {
//         document.querySelector('.menu-btn').innerText = 'X'
//     } else {
//         document.querySelector('.menu-btn').innerText = '☰'
//     }
// }