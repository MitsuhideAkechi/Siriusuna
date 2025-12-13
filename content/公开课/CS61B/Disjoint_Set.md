![](IMG-20251213231149108.png)

_**This is not [Graph](Graph.md), so how it is connected does not matter.**_
# Goal
![](IMG-20251213231149351.png)

# Structure
![](IMG-20251213231149900.png)

# Implementation

## Quick Find Variant
![](IMG-20251213231150583.png)

![](IMG-20251213231151447.png)
`find` and `isConnected` is very fast while `connect` is slow.

# Quick Union Variant
![](IMG-20251213231151461.png)

![](IMG-20251213231152046.png)
Defect: When tree is too tall, it may cost lots of time to `find`.

## Weighted(Ranked) Quick Union Variant
Link the smaller below the larger tree by _**tracking the tree size**_.

![](IMG-20251213231153277.png)

Improvement:
![](IMG-20251213231154476.png)
That is: when we link two tree, the depth of the node of tree incorporated will increase one. So what we need to do is incorporate the smaller one, lessening the increase of depth.

![](IMG-20251213231155557.png)
_**Attention:**_ In addition to weight(size), the height can also be rank, but the runtime is almost same and weight is more easy.

## Path Compression
![](IMG-20251213231156468.png)

![](IMG-20251213231157271.png)

The change: `find`
![](IMG-20251213231158191.png)


# Summary
![](IMG-20251213231159038.png)

![](IMG-20251213231200006.png)