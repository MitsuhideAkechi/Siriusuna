_**A self-reference function is a function whose return is a function by its own name**_

```python
def print_all(x):
	print(x)
	return print_all
```

```python
def print_sums(n): 
	print(n) 
	def next_sum(k): 
		return print_sums(n+k) 
	return next_sum
```

Let's look some examples:
```python
print_all(1)(3)(5)
"""------------------"""
print_all(3)(5) # 1
print_all(5) # 3
print_all # 5  Have no argument and no name receive it, that's finished.
```

```python
print_sum(1)(3)(5)
"""------------------"""
next_num(3)(5) # 1
print_sum(4)(5) # Evaluate 1 + 3 in next_sum
next_sum(5) #4
print_sum(9) # Evaluate 5 + 4 in next_sum
next_sum #9  Have no argument and no name receive it, that's finished. 
```
