# Using Data as Index
![](IMG-20251213231149124.png)

# Implementation
## Prototype
![](IMG-20251213231149361.png)
## Advance
### Generalizing to Other Than Integer
#### Method:（二进制编码法）
![](IMG-20251213231150065.png)
Perceiving strings as a number with base 27(because of 26 letters)
###### Improvement
![](IMG-20251213231150079.png)

![](IMG-20251213231150745.png)
![](IMG-20251213231150760.png)

#### Problem
![](IMG-20251213231151601.png)

##### Handling Collisions
![](IMG-20251213231151617.png)
![](IMG-20251213231152176.png)
(Buckets)

Modulo primes:[为什么哈希函数要模质数](https://www.cnblogs.com/cryingrain/p/11144225.html)
[What if modulo a negative number?](https://www.doubao.com/chat/collection/59869219752463?type=Thread)

_**Runtime:**_
![](IMG-20251213231152187.png)
![](IMG-20251213231153426.png)
![](IMG-20251213231153439.png)

# Hash Table
![](IMG-20251213231154596.png)
`Math.floorMod` is more recommended because it can handle negative `hashCode`.
![](IMG-20251213231155657.png)

# Hash Function
[31 is usually used.](https://www.doubao.com/chat/collection/16134957978791938?type=Thread)
![](IMG-20251213231156583.png)
![](IMG-20251213231157459.png)
![](IMG-20251213231157473.png)

![](IMG-20251213231158359.png)
[Why `hashCode` must be overridden before `equals`?](https://www.doubao.com/chat/collection/58131868468495?type=Thread)
