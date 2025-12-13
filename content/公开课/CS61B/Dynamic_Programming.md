# DAG
Direct acyclic graph  
Any such graph can be topological sorted(linearization)

## DAG SPT Algorithm
![](IMG-20251213231149109.png)
(Only pick bold arrows)
![](IMG-20251213231149353.png)
![](IMG-20251213231149921.png)
![](IMG-20251213231149938.png)
![](IMG-20251213231150608.png)
Traverse in sequence, relax weight and pick a smaller one when reach a node.

# Definition
![](IMG-20251213231150621.png)

# Longest Increasing Subsequence
![](IMG-20251213231151490.png)
![](IMG-20251213231152080.png)
![](IMG-20251213231153307.png)
![](IMG-20251213231154502.png)
(Actually, we can do DAG SPT, reverse the concept of relaxation)  
But twist the problem to fit algorithm is a better choice than changing algorithm.
![](IMG-20251213231155586.png)
That is _Reduction_.
![](IMG-20251213231156494.png)

## Improvement: Without Graph
![](IMG-20251213231156511.png)

![](IMG-20251213231157318.png)
We can use results for small Q to compute results for large Q.

### Implementation
![](IMG-20251213231158229.png)
Get rid of graph:
![](IMG-20251213231159072.png)
Just compare L and K instead of considering whether there's an edge.

