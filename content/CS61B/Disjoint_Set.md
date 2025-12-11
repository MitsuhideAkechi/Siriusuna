![](IMG-20251211101606179.png)

_**This is not [Graph](Graph.md), so how it is connected does not matter.**_
# Goal
![](IMG-20251211101606214.png)

# Structure
![](IMG-20251211101606242.png)

# Implementation

## Quick Find Variant
![](IMG-20251211101606274.png)

![](IMG-20251211101606303.png)
`find` and `isConnected` is very fast while `connect` is slow.

# Quick Union Variant
![](IMG-20251211101606356.png)

![](IMG-20251211101606394.png)
Defect: When tree is too tall, it may cost lots of time to `find`.

## Weighted(Ranked) Quick Union Variant
Link the smaller below the larger tree by _**tracking the tree size**_.

![](IMG-20251211101606435.png)

Improvement:
![](IMG-20251211101606470.png)
That is: when we link two tree, the depth of the node of tree incorporated will increase one. So what we need to do is incorporate the smaller one, lessening the increase of depth.

![](IMG-20251211101606507.png)
_**Attention:**_ In addition to weight(size), the height can also be rank, but the runtime is almost same and weight is more easy.

## Path Compression
![](IMG-20251211101606539.png)

![](IMG-20251211101606580.png)

The change: `find`
![](IMG-20251211101606613.png)


# Summary
![](IMG-20251211101606652.png)

![](IMG-20251211101606688.png)