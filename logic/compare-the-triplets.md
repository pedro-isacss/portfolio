# Compare the Triplets
Challenge: https://www.hackerrank.com/challenges/compare-the-triplets/problem

## My answer
```javascript
function compareTriplets(a, b) {
    let result = [0, 0]
    a.forEach((item, index) => {
        if(parseInt(item) > parseInt(b[index])){
            result = [result[0] + 1, result[1]]
        }else if(parseInt(item) < parseInt(b[index])){
            result = [result[0], result[1] + 1]
        }  
    })
    return result
}
```
