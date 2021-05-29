# Time Conversion
Challenge: https://www.hackerrank.com/challenges/time-conversion/problem

## My answer
```javascript
function timeConversion(s) {
    const hour = s.slice(0,2)
    if(/AM/.test(s) && hour === "12"){
        s = s.replace("12", "00")
    }else if(/PM/.test(s) && hour !== "12"){
         s = s.replace(hour, Number(Number(hour) + 12))
    }
    return s.replace(/PM|AM/, "")
}
```
