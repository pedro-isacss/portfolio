# Designer PDF Viewer
Challenge: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

## My answer
```javascript
function designerPdfViewer(h, word) {
    word = word.toUpperCase()
    let maxHeight = 0
    let arrWord = word.split("")
    arrWord.forEach((letter, index) => {
        let code = word.charCodeAt(index)
        const height = h[code - 65]
        if(height > maxHeight) maxHeight = height
    })
    return maxHeight * word.length
}
```
