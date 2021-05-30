# Plus Minus
Challenge: https://www.hackerrank.com/challenges/plus-minus/problem

## My answer
```javascript
function plusMinus(arr) {
    const positive = (arr.filter(item => item > 0).length/arr.length).toFixed(6)
    const negative = (arr.filter(item => item < 0).length/arr.length).toFixed(6)
    const zero = (arr.filter(item => item === 0).length/arr.length).toFixed(6)
    console.log(positive, "\n", negative, "\n", zero)
}
```
