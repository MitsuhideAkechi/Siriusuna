# Using Data as Index
![](IMG-20251211101610638.png)

# Implementation
## Prototype
![](IMG-20251211101610677.png)
## Advance
### Generalizing to Other Than Integer
#### Method:（二进制编码法）
![](IMG-20251211101610716.png)
Perceiving strings as a number with base 27(because of 26 letters)
###### Improvement
![](IMG-20251211101610747.png)

![](IMG-20251211101610787.png)
![](IMG-20251211101610837.png)

#### Problem
![](IMG-20251211101610874.png)

##### Handling Collisions
![](IMG-20251211101610907.png)
![](IMG-20251211101610945.png)
(Buckets)

Modulo primes:[为什么哈希函数要模质数](https://www.cnblogs.com/cryingrain/p/11144225.html)
[What if modulo a negative number?](https://www.doubao.com/chat/collection/59869219752463?type=Thread)

_**Runtime:**_
![](IMG-20251211101610979.png)
![](IMG-20251211101611034.png)
![](IMG-20251211101611078.png)

# Hash Table
![](IMG-20251211101611121.png)
`Math.floorMod` is more recommended because it can handle negative `hashCode`.
![](IMG-20251211101611151.png)

# Hash Function
[31 is usually used.](https://www.doubao.com/chat/collection/16134957978791938?type=Thread)
![](IMG-20251211101611194.png)
![](IMG-20251211101611260.png)
![](IMG-20251211101611301.png)

![](IMG-20251211101611348.png)
[Why `hashCode` must be overridden before `equals`?](https://www.doubao.com/chat/collection/58131868468495?type=Thread)
