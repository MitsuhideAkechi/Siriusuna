# L-Value and R-Value
![](IMG-20251213231201547.png)
![](IMG-20251213231202477.png)

![](IMG-20251213231203471.png)
![](IMG-20251213231204302.png)
![](IMG-20251213231205157.png)

# Move Semantics
![](IMG-20251213231205870.png)
## Move Constructor
![](IMG-20251213231205885.png)
![](IMG-20251213231206961.png)
![](IMG-20251213231207900.png)
_**When possible, steal it rather than copying.**_

## Move Assignment
[Another `=` overloading.](Operator_Overloading.md)

![](IMG-20251213231208628.png)
![](IMG-20251213231209526.png)
_**Still imperfect, it does some copy, with `=`**_
![](IMG-20251213231210076.png)
L-Value! It has name and identity. Although `rhs` is a R-Value reference, but the variable `rhs` itself is a L-Value.
![](IMG-20251213231210618.png)

## The Final Code:
![](IMG-20251213231210952.png)

# Summary: Rules
![](IMG-20251213231211417.png)
![](IMG-20251213231211770.png)
# More Modern
![](IMG-20251213231212382.png)
![](IMG-20251213231212394.png)

# Universal Reference
![](IMG-20251213231212860.png)