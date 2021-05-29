# Number Line Jumps
Challenge: https://www.hackerrank.com/challenges/kangaroo/problem

## My answer
```javascript
function kangaroo(x1, v1, x2, v2) {
    let front = x1>x2?x1:x2;
    let back = x1 === front?x2:x1;
    const vfront = x1>x2?v1:v2
    const vback = x1 === front?v2:v1
    const difference = front - back
    
    if(v1 === v2){
        return "NO"
    }
    
    while(true){
        console.log("jump")
        front += vfront
        back += vback
        if(front === back){
            return "YES"
        }else if(back > front || difference < front - back){
            return "NO"
        }
    }

}
```
