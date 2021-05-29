# Breaking the Records
Challenge: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

## My answer
```javascript
function breakingRecords(scores) {
    let scoreUp = 0
    let scoreDown = 0
    let maxScore = scores[0]
    let minScore = scores[0]
    scores.map(score => {
        if(score>maxScore){
            maxScore = score
            scoreUp++   
        }else if(score<minScore){
            minScore = score
            scoreDown++
        }
    })
    return [scoreUp, scoreDown]
}
```
