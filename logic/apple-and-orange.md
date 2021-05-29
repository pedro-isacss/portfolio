# Apple and Orange
Challenge: https://www.hackerrank.com/challenges/apple-and-orange/problem

## My answer
```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apples_in = 0
    let oranges_in = 0
    
    apples.map(apple => {
        if(a + apple >= s && a + apple <= t){
            apples_in++
        }
    })
    oranges.map(orange => {
        if(b + orange >= s && b + orange <= t){
            oranges_in++
        }
    })
    
    console.log(apples_in + "\n" + oranges_in)
}
```
