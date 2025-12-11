# DAG
Direct acyclic graph  
Any such graph can be topological sorted(linearization)

## DAG SPT Algorithm
![](IMG-20251211101606733.png)
(Only pick bold arrows)
![](IMG-20251211101606765.png)
![](IMG-20251211101606795.png)
![](IMG-20251211101606829.png)
![](IMG-20251211101606856.png)
Traverse in sequence, relax weight and pick a smaller one when reach a node.

# Definition
![](IMG-20251211101606908.png)

# Longest Increasing Subsequence
![](IMG-20251211101606935.png)
![](IMG-20251211101606968.png)
![](IMG-20251211101607005.png)
![](IMG-20251211101607038.png)
(Actually, we can do DAG SPT, reverse the concept of relaxation)  
But twist the problem to fit algorithm is a better choice than changing algorithm.
![](IMG-20251211101607070.png)
That is _Reduction_.
![](IMG-20251211101607102.png)

## Improvement: Without Graph
![](IMG-20251211101607148.png)

![](IMG-20251211101607177.png)
We can use results for small Q to compute results for large Q.

### Implementation
![](IMG-20251211101607215.png)
Get rid of graph:
![](IMG-20251211101607253.png)
Just compare L and K instead of considering whether there's an edge.

