# Range
It will not generate all of number immediately, but generate when it is used. And it will not return a list unless you convert it to.
```python
>>> range(3, 6)
range(3, 6) # not [3, 4, 5]

>>> r = range(3, 6)
>>> [r[0], r[2]]
[3, 5]

>>> range(4)[-1]
3
```

In Python, a `for` loop's iteration count is determined **when the loop starts** by the initial sequence (e.g., `range(n)`), and **does not change dynamically** if you modify variables afterward. Key points:

1. `range(n)` creates a fixed sequence at the start; changing `n` during the loop won’t affect iterations.
2. Modifying a list (e.g., inserting/deleting elements) while using `for i in range(len(list))` won’t change the loop count, but can cause index mismatches (elements may be skipped or revisited).
3. For dynamic scenarios (e.g., inserting into a list while iterating), use a `while` loop to manually manage the index and check the list’s current length.

**Conclusion:** Use `for` loops for fixed iterations; use `while` loops when you need to adjust the index dynamically (e.g., when modifying the iterated container).