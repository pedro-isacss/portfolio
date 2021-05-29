# Cats and a Mouse
Challenge: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

## My answer
```javascript
function catAndMouse(x, y, z) {
    const catA = Math.abs(z-x)
    const catB = Math.abs(z-y)
    const result = Math.abs(z-x) < Math.abs(z-y)? "Cat A":"Cat B"
    return catA - catB === 0? "Mouse C" : result
}
```
