# L-Value and R-Value
![](IMG-20251210185531203.png)
![](IMG-20251210185531226.png)

![](IMG-20251210185531250.png)
![](IMG-20251210185531364.png)
![](IMG-20251210185531388.png)

# Move Semantics
![](IMG-20251210185531412.png)
## Move Constructor
![](IMG-20251210185531535.png)
![](IMG-20251210185531569.png)
![](IMG-20251210185531591.png)
_**When possible, steal it rather than copying.**_

## Move Assignment
[Another `=` overloading.](Operator_Overloading.md)

![](IMG-20251210185531614.png)
![](IMG-20251210185531726.png)
_**Still imperfect, it does some copy, with `=`**_
![](IMG-20251210185531853.png)
L-Value! It has name and identity. Although `rhs` is a R-Value reference, but the variable `rhs` itself is a L-Value.
![](IMG-20251210185531880.png)

## The Final Code:
![](IMG-20251210185531997.png)

# Summary: Rules
![](IMG-20251210185532023.png)
![](IMG-20251210185532050.png)
# More Modern
![](IMG-20251210185532190.png)
![](IMG-20251210185532232.png)

# Universal Reference
![](IMG-20251210185532257.png)