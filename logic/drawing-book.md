# Drawing Book
Challenge: https://www.hackerrank.com/challenges/drawing-book/problem

## My answer
```javascript
function pageCount(n, p) {
    const beginning = p <= n - p? "start": "end"
    let currentPage = beginning === "start"?[0,1]:(n%2 === 0?[n, n+1]:[n-1, n])
    let flips = 0
    if(beginning === "start"){
        while(currentPage.indexOf(p) === -1){
            flips++
            currentPage[0] = currentPage[0] + 2
            currentPage[1] = currentPage[1] + 2
        }
    }else{
        while(currentPage.indexOf(p) === -1){
            flips++
            currentPage[0] = currentPage[0] - 2
            currentPage[1] = currentPage[1] - 2
        }
    }
    return flips
}
```
