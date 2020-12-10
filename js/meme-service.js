'use strict'
var gKeywords;
// smart funny awkward angry happy kids movies animals success political mean cute//

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
        keywords: ['funny', 'kids', 'mean']
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
        keywords: ['smart', 'movies']
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
        keywords: ['funny', 'awkward', 'movies']
    }
];

var gMeme = {
    selectedImgId: 4,
    selectedLineIdx: 0,

    lines: [{
        txt: '',
        size: 18,
        align: 'left',
        color: 'black'
    }, {
        txt: 'I love chocolate',
        size: 18,
        align: 'left',
        color: 'black'
    }]
}

// console.log(gMeme.lines[gMeme.selectedLineIdx].txt)