# Grading Students
Challenge: https://www.hackerrank.com/challenges/grading/problem

## My answer
```javascript
function gradingStudents(grades) {
    let result = []
    grades.map(item => {
        let next = ((Math.floor(item/5))+1)*5
        next-item < 3 && next >= 40?(
            result.push(next)
        ):(
            result.push(item)
        )
    })
    return result
}
```
