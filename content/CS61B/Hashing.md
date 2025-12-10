# Using Data as Index
![](IMG-20251210185515447.png)

# Implementation
## Prototype
![](IMG-20251210185515475.png)
## Advance
### Generalizing to Other Than Integer
#### Method:（二进制编码法）
![](IMG-20251210185515502.png)
Perceiving strings as a number with base 27(because of 26 letters)
###### Improvement
![](IMG-20251210185515528.png)

![](IMG-20251210185515648.png)
![](IMG-20251210185515674.png)

#### Problem
![](IMG-20251210185515701.png)

##### Handling Collisions
![](IMG-20251210185515724.png)
![](IMG-20251210185515749.png)
(Buckets)

Modulo primes:[为什么哈希函数要模质数](https://www.cnblogs.com/cryingrain/p/11144225.html)
[What if modulo a negative number?](https://www.doubao.com/chat/collection/59869219752463?type=Thread)

_**Runtime:**_
![](IMG-20251210185515775.png)
![](IMG-20251210185515800.png)
![](IMG-20251210185515919.png)

# Hash Table
![](IMG-20251210185516055.png)
`Math.floorMod` is more recommended because it can handle negative `hashCode`.
![](IMG-20251210185516086.png)

# Hash Function
[31 is usually used.](https://www.doubao.com/chat/collection/16134957978791938?type=Thread)
![](IMG-20251210185516113.png)
![](IMG-20251210185516143.png)
![](IMG-20251210185516255.png)

![](IMG-20251210185516280.png)
[Why `hashCode` must be overridden before `equals`?](https://www.doubao.com/chat/collection/58131868468495?type=Thread)
