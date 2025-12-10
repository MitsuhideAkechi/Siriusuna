_**Dictionaries are "unordered" collections of key-value pairs**_

**Dictionary keys do have two restrictions:**  
- A key of a dictionary cannot be a list or a dictionary (or any mutable type)  
- Two keys cannot be equal; There can be at most one value for a given key
>This first restriction is tied to Python's underlying implementation of dictionaries
>The second restriction is part of the dictionary abstraction

_If you want to associate multiple values with a key, store them all in a sequence value._

Some built-in function:
```python
numerals = {'I': 1, 'V': 5, 'X': 10}
numerals['I'] # 1
numerals.keys() # dict_keys(['X', 'V', 'I'])
numerals.values() # dict_values([10, 5, 1])
numerals.items() # dict_items([('X': 10), ('V': 5), ('I': 1)])
items = numerals.items()
dict(items) #  {'X': 10, 'V': 5, 'I': 1}
numerals.update({'L': 50, 'C': 100}) # {'X': 10, 'V': 5, 'I': 1, 'L': 50,'C': 100}
```
