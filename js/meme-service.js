'use strict'

var gCanvas;
var gCtx;

var gMeme = {
    currImgId: 0,
    currLineIdx: 0,

    lines: [{
        txt: '',
        size: 32,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        x: 250,
        y: 50,
    }, {
        txt: '',
        size: 32,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        x: 250,
        y: 430,
    }]
}

function setMemeImg(img) {
    gMeme.currImgId = img
}

function setText(textInput) {
    gMeme.lines[gMeme.currLineIdx].txt = textInput;
}

function clearText() {
    gMeme.lines[gMeme.currLineIdx].txt = ''
}

function changeAlign(align) {
    gMeme.lines[gMeme.currLineIdx].align = align;
    if (gMeme.lines[gMeme.currLineIdx].align === 'left') gMeme.lines[gMeme.currLineIdx].x = 50
    if (gMeme.lines[gMeme.currLineIdx].align === 'right') gMeme.lines[gMeme.currLineIdx].x = 450
    if (gMeme.lines[gMeme.currLineIdx].align === 'center') gMeme.lines[gMeme.currLineIdx].x = 250
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.currLineIdx].size += diff
}

function changeStrokeColor(userStrokeChoice) {
    gMeme.lines[gMeme.currLineIdx].stroke = userStrokeChoice
}

function changeFillColor(userFillChoice) {
    gMeme.lines[gMeme.currLineIdx].color = userFillChoice
}


function changeFontType(userFontChoice) {
    gMeme.lines[gMeme.currLineIdx].font = userFontChoice
}

function changeLinePos(diff) {
    currDiff = gMeme.lines[gMeme.currLineIdx].size * diff
    gMeme.lines[gMeme.currLineIdx].y += currDiff
}

function addLine() {
    if (gMeme.currLineIdx === gMeme.lines.length - 1) {
        gMeme.lines.push({
            txt: '',
            size: gMeme.lines[gMeme.currLineIdx].size,
            align: gMeme.lines[gMeme.currLineIdx].align,
            color: gMeme.lines[gMeme.currLineIdx].color,
            stroke: gMeme.lines[gMeme.currLineIdx].stroke,
            font: gMeme.lines[gMeme.currLineIdx].font,
            x: gMeme.lines[gMeme.currLineIdx].x,
            y: gMeme.lines[gMeme.currLineIdx].y + gMeme.lines[gMeme.currLineIdx].size
        });
        gMeme.currLineIdx += 1
    } else {
        gMeme.lines.splice(gMeme.currLineIdx + 1, 0, {
            txt: '',
            size: gMeme.lines[gMeme.currLineIdx].size,
            align: gMeme.lines[gMeme.currLineIdx].align,
            color: gMeme.lines[gMeme.currLineIdx].color,
            stroke: gMeme.lines[gMeme.currLineIdx].stroke,
            font: gMeme.lines[gMeme.currLineIdx].font,
            x: gMeme.lines[gMeme.currLineIdx].x,
            y: gMeme.lines[gMeme.currLineIdx].y + gMeme.lines[gMeme.currLineIdx].size
        })
        gMeme.currLineIdx += 1
    }
}

function switchZone() {
    if (gMeme.currLineIdx < gMeme.lines.length - 1) gMeme.currLineIdx = gMeme.lines.length - 1
    else gMeme.currLineIdx = 0
}

function findPrevLineIdx() {
    if (gMeme.currLineIdx === 0) return
    gMeme.currLineIdx = gMeme.currLineIdx - 1
}

function findNextLineIdx() {
    if (gMeme.currLineIdx === gMeme.lines.length - 1) return
    gMeme.currLineIdx = gMeme.currLineIdx + 1
}

function clearAll() {
    gMeme.lines.forEach(function(line) {
        line.txt = ''
    })
    gMeme.currLineIdx = 0
}

function setFilter(filterBy) {
    gFilterBy = filterBy
}