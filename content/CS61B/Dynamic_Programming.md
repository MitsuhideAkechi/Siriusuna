# DAG
Direct acyclic graph  
Any such graph can be topological sorted(linearization)

## DAG SPT Algorithm
![](IMG-20251210185511634.png)
(Only pick bold arrows)
![](IMG-20251210185511659.png)
![](IMG-20251210185511681.png)
![](IMG-20251210185511704.png)
![](IMG-20251210185511728.png)
Traverse in sequence, relax weight and pick a smaller one when reach a node.

# Definition
![](IMG-20251210185511750.png)

# Longest Increasing Subsequence
![](IMG-20251210185511791.png)
![](IMG-20251210185511905.png)
![](IMG-20251210185511931.png)
![](IMG-20251210185511958.png)
(Actually, we can do DAG SPT, reverse the concept of relaxation)  
But twist the problem to fit algorithm is a better choice than changing algorithm.
![](IMG-20251210185511984.png)
That is _Reduction_.
![](IMG-20251210185512011.png)

## Improvement: Without Graph
![](IMG-20251210185512036.png)

![](IMG-20251210185512061.png)
We can use results for small Q to compute results for large Q.

### Implementation
![](IMG-20251210185512085.png)
Get rid of graph:
![](IMG-20251210185512211.png)
Just compare L and K instead of considering whether there's an edge.

