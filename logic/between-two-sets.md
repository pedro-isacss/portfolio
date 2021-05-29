# Between Two Sets
Challenge: https://www.hackerrank.com/challenges/between-two-sets/problem

## My answer
```javascript
function getTotalX(a, b) {
    let factor = []
    let result = []
    
    for(let i = 1; i < b[0]+1; i++ ){
        let isFac = true
        a.map(item => {
            if(i%item !== 0){
                isFac = false
            }  
        })
        if(isFac){
            factor.push(i)
        }
    }
    
    factor.map(fac => {
        let isFac = true
        b.map(element => {
            if(element%fac !== 0){
                isFac = false
            }
        })
        if(isFac){
            result.push(fac)
        }
    })
    
    return result.length
}
```
