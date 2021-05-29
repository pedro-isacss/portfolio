# Picking Numbers
Challenge: https://www.hackerrank.com/challenges/picking-numbers/submissions/code/202310960

## My answer
```javascript
function pickingNumbers(a) {
    let result = 0
    let arrResult = []
    let unique = [...new Set(a)].sort((a, b) => a - b);
    let pars = []
    a = a.sort((a, b) => a - b)
    
    unique.forEach((item, index) => {
        if(unique[index+1] === item +1) pars.push([item, unique[index+1]])
        pars.push([item])
    })   

    pars.forEach(par => {
        let arr = a.filter(item => par.indexOf(item) !== -1)
        arrResult.push(arr)
    })
    
    console.log(arrResult)
    
    arrResult.forEach(item => {
        if(item.length > result) result = item.length
    })
    
    return result
}
```
