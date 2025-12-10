_**How we raise exception and handle errors in python is called the exception mechanism, which is declaring and responding to exceptional conditions.**_

Exceptions can be handled by program, preventing the interpret from halting, which unhandled will do cause python to halt.

---
_**Tips:**_
1. Exceptions are objects. They have classes with constructor.
2. They enable non-local continuations of control.
3. Exception handling tends to be slow, so should not be used in standard situations.
---

# Raising Exception

- `assert` statement raise an exception of type `AssertionError`
	- Can be ignored by running with "-O" flag.
- `raise` statement: 
	- `raise <exception>`
	- `<exception>` must evaluate to a subclass of `BaseException` or an instance of one.

Exceptions are constructed like any other object.  
E.g., `TypeError('Bad argument!') ` 
- `TypeError` -- A function was passed the wrong number/type of argument  
- `NameError` -- A name wasn't found  
- `KeyError` -- A key wasn't found in a dictionary  
- `RuntimeError` -- Catch-all for troubles during interpretation

# `try` Statement - Handle Exceptions

```python
try:
	<try suite>
except <exception class> as <name>:
	<except suite>
finally: # optional
	<finally suite>
```
_**Execution rule:**_  
- The `<try suite>` is executed first.  
- If, during the course of executing the `<try suite>`, an exception is raised that is not handled otherwise, and  
- If the class of the exception inherits from `<exception class>`, then
- The `<except suite>` is executed, with `<name>` bound to the exception.
- The `<finally suite>` will be executed no matter whether an error has been handled.

```python
try:
	x = 1 / 0
except ZeroDivisionError as e:
	print(f"handlina a {type(e)}")
	x = 0
```

**Multiple try statement:**  
Control jumps to the except suite of the most recent try statement that handles that type of exception.  
The exception will jump out until being handled by one of except suite and then it is handled, no error anymore.