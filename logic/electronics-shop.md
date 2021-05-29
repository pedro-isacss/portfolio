# Electronics Shop
Challenge: https://www.hackerrank.com/challenges/electronics-shop/problem

## My answer
```javascript
function getMoneySpent(keyboards, drives, b) {
    let result = -1;
    keyboards.map(keyboard => {
        drives.map(drive => {
            const value = keyboard + drive
            if(value > result && value <= b) result = value
        })
    })
    return result
}
```
