# [Iteration](Iteration.md)
# The Enhanced For Loop
![](IMG-20251211101612430.png)
The enhanced for loop is the shorthand of define a iterator and iterate it.

# Implementing an Iterator

## Two Interfaces
- `Iterable`:
![](IMG-20251211101612479.png)
- `Iterator`
![](IMG-20251211101612518.png)

Example:
![](IMG-20251211101612549.png)
But we did not implement `Iterator` and `Iterable` interface, for-each will not work.
![](IMG-20251211101612585.png)
And `KeyIterator` should `implements` `Iterator`.
