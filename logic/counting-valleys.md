# Counting Valleys
Challenge: https://www.hackerrank.com/challenges/counting-valleys/problem

## My answer
```javascript
function countingValleys(steps, path) {
    path = path.split("")
    let altitude = 0
    let countDown = 0
    let traversed = 0
    path.forEach(step => {
        if(step === "U"){
            if(countDown >= 1 && altitude<0 && countDown+altitude >= 0) traversed++
            countDown = 0
            altitude++
        }
        else{
            altitude--
            countDown++
        }
    })
    return traversed

}
```
