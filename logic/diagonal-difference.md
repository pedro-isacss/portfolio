# Diagonal Difference
Challenge: https://www.hackerrank.com/challenges/diagonal-difference/problem

## My answer
```javascript
function diagonalDifference(arr) {
    const len = arr.length
    let diagonal1 = 0;
    let diagonal2 = 0
    arr.map((item, index) => diagonal1 += item[index])
    arr.map((item, index) => diagonal2 += item[-index+len-1])
    return Math.abs(diagonal1-diagonal2)
}
```
