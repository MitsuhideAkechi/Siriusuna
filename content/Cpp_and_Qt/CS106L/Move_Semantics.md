# L-Value and R-Value
![](IMG-20251211101621044.png)
![](IMG-20251211101621077.png)

![](IMG-20251211101621104.png)
![](IMG-20251211101621136.png)
![](IMG-20251211101621168.png)

# Move Semantics
![](IMG-20251211101621208.png)
## Move Constructor
![](IMG-20251211101621234.png)
![](IMG-20251211101621271.png)
![](IMG-20251211101621299.png)
_**When possible, steal it rather than copying.**_

## Move Assignment
[Another `=` overloading.](Operator_Overloading.md)

![](IMG-20251211101621342.png)
![](IMG-20251211101621409.png)
_**Still imperfect, it does some copy, with `=`**_
![](IMG-20251211101621450.png)
L-Value! It has name and identity. Although `rhs` is a R-Value reference, but the variable `rhs` itself is a L-Value.
![](IMG-20251211101621508.png)

## The Final Code:
![](IMG-20251211101621557.png)

# Summary: Rules
![](IMG-20251211101621596.png)
![](IMG-20251211101621631.png)
# More Modern
![](IMG-20251211101621679.png)
![](IMG-20251211101621721.png)

# Universal Reference
![](IMG-20251211101621760.png)