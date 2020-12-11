'use strict'

var gKeywords = { 'smart': 6, 'funny': 8, 'angry': 3, 'happy': 7, 'kids': 4, 'movies': 6, 'animals': 3, 'success': 3, 'political': 3, 'mean': 3, 'cute': 4 }

var gImgs = [{
        id: 1,
        keywords: ['angry', 'political', 'funny', 'mean']
    },
    {
        id: 2,
        keywords: ['happy', 'cute', 'animals']
    },
    {
        id: 3,
        keywords: ['happy', 'cute', 'kids', 'animals']
    },
    {
        id: 4,
        keywords: ['cute', 'animals']
    },
    {
        id: 5,
        keywords: ['happy', 'funny', 'success', 'kids']
    },
    {
        id: 6,
        keywords: ['funny', 'smart']
    },
    {
        id: 7,
        keywords: ['funny', 'kids']
    },
    {
        id: 8,
        keywords: ['funny', 'movies', 'smart', 'mean']
    },
    {
        id: 9,
        keywords: ['funny', 'kids', 'mean', 'success']
    },
    {
        id: 10,
        keywords: ['happy', 'political', ]
    },
    {
        id: 11,
        keywords: ['happy', 'success', 'movies']
    },
    {
        id: 12,
        keywords: ['angry', 'smart', 'movies']
    },
    {
        id: 13,
        keywords: ['smart', 'angry', 'movies']
    },
    {
        id: 14,
        keywords: ['funny', 'smart', 'movies']
    },
    {
        id: 15,
        keywords: ['political', 'smart']
    },
    {
        id: 16,
        keywords: ['funny', 'movies', 'cute']
    }
];

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
        y: 400,
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

function ClearAll() {
    gMeme.lines.forEach(function(line) {
        line.txt = ''
    })
    gMeme.currLineIdx = 0
}