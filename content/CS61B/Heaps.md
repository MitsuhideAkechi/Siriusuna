# Priority Queue
_**A bag that can put things in, pick things out, peek things in it but only interact with the smallest(biggest, best whatever) one is allowed.**_  
That is, when there is a queue, there always is something has higher priority and should leave as soon as possible.
# Operation
![](IMG-20251211101611399.png)

# Data Structure Used to Implement: Heaps
## Definition
![](IMG-20251211101611446.png)

## Operation
![](IMG-20251211101611486.png)

## Storage
![](IMG-20251211101611532.png)
Same to [Disjoint_Set](Disjoint_Set.md), we use array and map.  
_**But for complete binary tree, the parent will be same.(Above all, this is how it is defined)**_

So,
![](IMG-20251211101611580.png)
the parent array is discarded.  
[The map between index and location](Tree#^3mtu7m.md)
> Similarly, the index of parent will be `(k - 1) / 2`

## Runtime
![](IMG-20251211101611619.png)

