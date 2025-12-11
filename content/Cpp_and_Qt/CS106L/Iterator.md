# Why Use Iterators
![](IMG-20251211101619338.png)

![](IMG-20251211101619374.png)
![](IMG-20251211101619400.png)

# Common Functions
## begin
![](IMG-20251211101619441.png)
`set<int>::iterator iter = mySet.begin();`

## *
![](IMG-20251211101619468.png)

# ++
![](IMG-20251211101619507.png)
Prefix and postfix are both OK. Same as the primitive value, same as the pointer, etc.
# end
![](IMG-20251211101619534.png)

# Usage
![](IMG-20251211101619574.png)

# Why it Powerful
![](IMG-20251211101619606.png)
![](IMG-20251211101619646.png)

# Map Iterator
![](IMG-20251211101619681.png)
## Pair
![](IMG-20251211101619714.png)

# Further Usage
![](IMG-20251211101619774.png)
- `find`
- `lower_bound`: returns an iterator to the first element _not less_ than the given key 
- `upper_bound`: returns an iterator to the first element _greater_ than the given key
![](IMG-20251211101619811.png)
![](IMG-20251211101619843.png)
![](IMG-20251211101619887.png)
- range based for loop
![](IMG-20251211101619922.png)

# Iterator Type
![](IMG-20251211101619960.png)
But some can't, e.g. list.

![](IMG-20251211101619991.png)
![](IMG-20251211101620028.png)
- input
![](IMG-20251211101620062.png)
![](IMG-20251211101620102.png)
- output
![](IMG-20251211101620141.png)
![](IMG-20251211101620179.png)
- forward
![](IMG-20251211101620216.png)
![](IMG-20251211101620254.png)
- Bidirectional
![](IMG-20251211101620315.png)
![](IMG-20251211101620351.png)
- Random
![](IMG-20251211101620391.png)
![](IMG-20251211101620429.png)

# Invalidate
![](IMG-20251211101620467.png)
![](IMG-20251211101620512.png)
All STL can be erased in this way.

# Stream Iterator
![](IMG-20251211101620561.png)
