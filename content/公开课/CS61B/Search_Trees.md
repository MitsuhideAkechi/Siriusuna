List -> Tree
# Representation of Tree
![](IMG-20251213231149151.png)
![](IMG-20251213231149403.png)
![](IMG-20251213231150319.png)

# Categories
![](IMG-20251213231150333.png)

# Binary Search Tree(BST)
## Definition
1. BSTs are [Trees](Trees.md) with **some property**.
![](IMG-20251213231151079.png)
![](IMG-20251213231151103.png)
![](IMG-20251213231151818.png)

## Runtime: log N

## Method
### `search`
### `insert`
![](IMG-20251213231151833.png)
![](IMG-20251213231153115.png)
(A common rookie bad habit to avoid)
### `delete`
- No child: delete it.
- One child: delete it, and link its child to its parent.
- Two child:
![](IMG-20251213231153131.png)
Find its precursor or successor in in-order.(The biggest one in left child tree _(has no right child)_ or smallest one in right child tree _(has no left child)_)
![](IMG-20251213231154269.png)

## Red-Black Trees
_**Isometric with a 2-3 tree**_
![](IMG-20251213231154288.png)
![](IMG-20251213231155406.png)

# Balanced Search Tree
## Tree Rotation
![](IMG-20251213231155423.png)

## B-Tree
_**Balanced and no require rotations.**_
![](IMG-20251213231156386.png)
![](IMG-20251213231157184.png)
![](IMG-20251213231158164.png)
![](IMG-20251213231158996.png)
![](IMG-20251213231159942.png)



![](IMG-20251213231200698.png)
M is the number of children a node could have and M-1 is the item cap.  
(For M = 4, 2-3-4 Tree; For M = 3, 2-3 Tree)  
A B-Tree of order n is a tree whose M = n.


# [Traversal](Traversal.md)


