# Divisible Sum Pairs
Challeng: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

## My answer
```javascript
function divisibleSumPairs(n, k, ar) {
    let result = 0
    let i = 0
    let j = 1
    while(true){
        if(i === j){
            j++
        }else if(i === n){
            break
        }else if(j === n){
            i++
            j = i+1
        }else{
            if((ar[i]+ar[j])%k === 0)result++
            j++
        }
    }
    return result
}
```
