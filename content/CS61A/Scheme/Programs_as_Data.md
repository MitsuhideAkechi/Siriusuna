The built-in Scheme [list data structure](Fundamentals#^2gccw8.md) can represent [combinations](Fundamentals#^bmog31.md), using [Symbolic_Programming](Symbolic_Programming.md).

```scheme
> (list 'quotient 10 2)
(quotient 10 2)
> (eval (list 'quotient 10 2))
5
```
_**All the Scheme codes are just lists. We can write a program that writes a program.**_

A complex combination is a nested Pair like this:(A and B are another combination like `(+ 3 2)`, etc.)
![](IMG-20251210185509912.jpg)


```scheme
(define (fact n)
	(if (= n 0) 1 (* n (fact (- n 1)))))

(define (fact-exp n)
	(if (= n 0) 1 (list '* n (fact-exp (- n 1)))))
```

# Generating Codes
## Quasiquotation

There are two ways to quote an expression.
- Quote
- Quasiquote: Parts of a quasiquoted expression can be unquoted with comma
![](IMG-20251210185510029.png)

Example:
```scheme
(define (sum-while initial-x condition add-to-total update-x)
    `(begin
        (define (f x total)
            (if ,condition
                (f ,update-x (+ total ,add-to-total))
            total))
    (f ,initial-x 0)))
```
