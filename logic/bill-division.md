# Bill Division
Challenge: https://www.hackerrank.com/challenges/bon-appetit/problem

## My answer
```javascript
function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    const total = bill.reduce((acc, curr) => acc + curr)/2
    console.log(total === b?"Bon Appetit":b - total)
}
```
