# Subarray Division
Challenge: https://www.hackerrank.com/challenges/the-birthday-bar/problem

## My answer
```javascript
function birthday(s, d, m) {
    let result = 0;
    let groups = [];
    s.forEach((item, index) => {    
        groups.push(s.slice(index, index+m))
    });
    groups.filter(item => item.length === m).forEach(item => {
        let sum = item.reduce((accumulate, current) => accumulate+current )
        if(sum === d) result++
    });
    
    return result;
}
```
