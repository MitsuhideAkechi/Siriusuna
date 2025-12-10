List -> Tree
# Representation of Tree
![](IMG-20251210185519865.png)
![](IMG-20251210185519888.png)
![](IMG-20251210185520012.png)

# Categories
![](IMG-20251210185520034.png)

# Binary Search Tree(BST)
## Definition
1. BSTs are [Trees](Trees.md) with **some property**.
![](IMG-20251210185520056.png)
![](IMG-20251210185520078.png)
![](IMG-20251210185520185.png)

## Runtime: log N

## Method
### `search`
### `insert`
![](IMG-20251210185520209.png)
![](IMG-20251210185520232.png)
(A common rookie bad habit to avoid)
### `delete`
- No child: delete it.
- One child: delete it, and link its child to its parent.
- Two child:
![](IMG-20251210185520347.png)
Find its precursor or successor in in-order.(The biggest one in left child tree _(has no right child)_ or smallest one in right child tree _(has no left child)_)
![](IMG-20251210185520464.png)

## Red-Black Trees
_**Isometric with a 2-3 tree**_
![](IMG-20251210185520489.png)
![](IMG-20251210185520622.png)

# Balanced Search Tree
## Tree Rotation
![](IMG-20251210185520647.png)

## B-Tree
_**Balanced and no require rotations.**_
![](IMG-20251210185520675.png)
![](IMG-20251210185520702.png)
![](IMG-20251210185520810.png)
![](IMG-20251210185520836.png)
![](IMG-20251210185520862.png)



![](IMG-20251210185521086.png)
M is the number of children a node could have and M-1 is the item cap.  
(For M = 4, 2-3-4 Tree; For M = 3, 2-3 Tree)  
A B-Tree of order n is a tree whose M = n.


# [Traversal](Traversal.md)


