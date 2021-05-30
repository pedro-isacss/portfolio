# Simple Array Sum
Challenge: https://www.hackerrank.com/challenges/simple-array-sum/problem

## My answer
```javascript
function simpleArraySum(ar) {
    let result = 0;
    ar.map((number) => result += number)
    return result
}
```
