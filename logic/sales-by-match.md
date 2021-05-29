# Sales by Match
Challenge: https://www.hackerrank.com/challenges/sock-merchant/problem

## My answer
```javascript
function sockMerchant(n, ar) {
    let pars = 0
    const arUnique = [...new Set(ar)]
    arUnique.forEach(item => {
        pars += parseInt((ar.filter(element => element === item).length / 2)) 
    })
    return pars
}
```
