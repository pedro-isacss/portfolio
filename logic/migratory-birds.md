# Migratory Birds
Challenge: https://www.hackerrank.com/challenges/migratory-birds/submissions

## My answer
```python
def migratoryBirds(arr):
    max_count = 0
    max_element = 0
    unique = sorted(set(arr))
    for element in unique:
        count = arr.count(element)
        if count > max_count:
            max_count = count
            max_element = element
    return max_element
```
