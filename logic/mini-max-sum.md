# Mini-Max Sum
Challenge: https://www.hackerrank.com/challenges/mini-max-sum/problem

## My answer
```javascript
function miniMaxSum(arr) {
    arr = arr.sort()
    const min = arr.slice(0, 4).reduce((accum, curr) => accum + curr)
    const max = arr.slice(1, 5).reduce((accum, curr) => accum + curr)
    console.log(min, max)
}
```
