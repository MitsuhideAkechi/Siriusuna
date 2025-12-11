List -> Tree
# Representation of Tree
![](IMG-20251211101613525.png)
![](IMG-20251211101613566.png)
![](IMG-20251211101613607.png)

# Categories
![](IMG-20251211101613635.png)

# Binary Search Tree(BST)
## Definition
1. BSTs are [Trees](Trees.md) with **some property**.
![](IMG-20251211101613681.png)
![](IMG-20251211101613719.png)
![](IMG-20251211101613757.png)

## Runtime: log N

## Method
### `search`
### `insert`
![](IMG-20251211101613788.png)
![](IMG-20251211101613828.png)
(A common rookie bad habit to avoid)
### `delete`
- No child: delete it.
- One child: delete it, and link its child to its parent.
- Two child:
![](IMG-20251211101613863.png)
Find its precursor or successor in in-order.(The biggest one in left child tree _(has no right child)_ or smallest one in right child tree _(has no left child)_)
![](IMG-20251211101613919.png)

## Red-Black Trees
_**Isometric with a 2-3 tree**_
![](IMG-20251211101613953.png)
![](IMG-20251211101613996.png)

# Balanced Search Tree
## Tree Rotation
![](IMG-20251211101614027.png)

## B-Tree
_**Balanced and no require rotations.**_
![](IMG-20251211101614075.png)
![](IMG-20251211101614109.png)
![](IMG-20251211101614152.png)
![](IMG-20251211101614189.png)
![](IMG-20251211101614224.png)



![](IMG-20251211101614270.png)
M is the number of children a node could have and M-1 is the item cap.  
(For M = 4, 2-3-4 Tree; For M = 3, 2-3 Tree)  
A B-Tree of order n is a tree whose M = n.


# [Traversal](Traversal.md)


