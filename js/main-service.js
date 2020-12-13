'use strict'

var gFilterBy = 'All'
var gKeywordsFullDisplay = false;


var gKeywords = [
    { keyword: 'smart', count: 6, },
    { keyword: 'funny', count: 8, },
    { keyword: 'angry', count: 2, },
    { keyword: 'happy', count: 7, },
    { keyword: 'kids', count: 4, },
    { keyword: 'movies', count: 6, },
    { keyword: 'animals', count: 3, },
    { keyword: 'success', count: 3, },
    { keyword: 'political', count: 3, },
    { keyword: 'mean', count: 5, },
    { keyword: 'cute', count: 4, },
    { keyword: 'crazy', count: 6 }
]

var gImgs = [{
        id: 1,
        keywords: ['angry', 'political', 'funny', 'mean', 'crazy']
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
        keywords: ['funny', 'smart', 'crazy']
    },
    {
        id: 7,
        keywords: ['funny', 'kids', 'crazy']
    },
    {
        id: 8,
        keywords: ['funny', 'movies', 'smart', 'mean', 'crazy']
    },
    {
        id: 9,
        keywords: ['funny', 'kids', 'mean', 'success', 'crazy']
    },
    {
        id: 10,
        keywords: ['happy', 'political']
    },
    {
        id: 11,
        keywords: ['happy', 'success', 'movies']
    },
    {
        id: 12,
        keywords: ['mean', 'smart', 'movies']
    },
    {
        id: 13,
        keywords: ['smart', 'angry', 'movies']
    },
    {
        id: 14,
        keywords: ['funny', 'smart', 'movies', 'crazy']
    },
    {
        id: 15,
        keywords: ['political', 'smart', 'mean']
    },
    {
        id: 16,
        keywords: ['funny', 'movies', 'cute']
    }
];

function keywordsToDisplay() {
    var keywords = [];
    if (!gKeywordsFullDisplay) {
        for (var i = 0; i < 5; i++)
            keywords.push(gKeywords[i])
    } else {
        for (var i = 0; i < gKeywords.length; i++)
            keywords.push(gKeywords[i])
    }
    return keywords
}

function getImgsForDisplay() {
    var imgs = gImgs.filter(function(img) {
        if (gFilterBy === 'All') {
            return imgs = gImgs;
        }
        return img.keywords.includes(gFilterBy)

    })
    return imgs;
}