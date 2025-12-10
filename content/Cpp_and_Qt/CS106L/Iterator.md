# Why Use Iterators
![](IMG-20251210185528314.png)

![](IMG-20251210185528338.png)
![](IMG-20251210185528361.png)

# Common Functions
## begin
![](IMG-20251210185528384.png)
`set<int>::iterator iter = mySet.begin();`

## *
![](IMG-20251210185528600.png)

# ++
![](IMG-20251210185528625.png)
Prefix and postfix are both OK. Same as the primitive value, same as the pointer, etc.
# end
![](IMG-20251210185528650.png)

# Usage
![](IMG-20251210185528767.png)

# Why it Powerful
![](IMG-20251210185528793.png)
![](IMG-20251210185528819.png)

# Map Iterator
![](IMG-20251210185528957.png)
## Pair
![](IMG-20251210185528985.png)

# Further Usage
![](IMG-20251210185529009.png)
- `find`
- `lower_bound`: returns an iterator to the first element _not less_ than the given key 
- `upper_bound`: returns an iterator to the first element _greater_ than the given key
![](IMG-20251210185529034.png)
![](IMG-20251210185529255.png)
![](IMG-20251210185529284.png)
- range based for loop
![](IMG-20251210185529312.png)

# Iterator Type
![](IMG-20251210185529426.png)
But some can't, e.g. list.

![](IMG-20251210185529454.png)
![](IMG-20251210185529480.png)
- input
![](IMG-20251210185529614.png)
![](IMG-20251210185529640.png)
- output
![](IMG-20251210185529667.png)
![](IMG-20251210185529695.png)
- forward
![](IMG-20251210185529902.png)
![](IMG-20251210185529930.png)
- Bidirectional
![](IMG-20251210185529958.png)
![](IMG-20251210185530071.png)
- Random
![](IMG-20251210185530100.png)
![](IMG-20251210185530126.png)

# Invalidate
![](IMG-20251210185530260.png)
![](IMG-20251210185530289.png)
All STL can be erased in this way.

# Stream Iterator
![](IMG-20251210185530318.png)
