# Birthday Cake Candles
Challenge: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

## My answer
```javascript
function birthdayCakeCandles(candles) {
    const max = Math.max(...candles)
    return candles.filter(item => item === max).length

}
```
