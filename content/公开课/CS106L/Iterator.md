# Why Use Iterators
![](IMG-20251213231201545.png)

![](IMG-20251213231202410.png)
![](IMG-20251213231203429.png)

# Common Functions
## begin
![](IMG-20251213231204269.png)
`set<int>::iterator iter = mySet.begin();`

## *
![](IMG-20251213231205120.png)

# ++
![](IMG-20251213231205808.png)
Prefix and postfix are both OK. Same as the primitive value, same as the pointer, etc.
# end
![](IMG-20251213231205821.png)

# Usage
![](IMG-20251213231206883.png)

# Why it Powerful
![](IMG-20251213231207818.png)
![](IMG-20251213231207839.png)

# Map Iterator
![](IMG-20251213231208547.png)
## Pair
![](IMG-20251213231208569.png)

# Further Usage
![](IMG-20251213231209416.png)
- `find`
- `lower_bound`: returns an iterator to the first element _not less_ than the given key 
- `upper_bound`: returns an iterator to the first element _greater_ than the given key
![](IMG-20251213231209444.png)
![](IMG-20251213231210035.png)
![](IMG-20251213231210539.png)
- range based for loop
![](IMG-20251213231210563.png)

# Iterator Type
![](IMG-20251213231210915.png)
But some can't, e.g. list.

![](IMG-20251213231211368.png)
![](IMG-20251213231211699.png)
- input
![](IMG-20251213231211718.png)
![](IMG-20251213231212311.png)
- output
![](IMG-20251213231212331.png)
![](IMG-20251213231212828.png)
- forward
![](IMG-20251213231213013.png)
![](IMG-20251213231213035.png)
- Bidirectional
![](IMG-20251213231213260.png)
![](IMG-20251213231213284.png)
- Random
![](IMG-20251213231213471.png)
![](IMG-20251213231213485.png)

# Invalidate
![](IMG-20251213231213652.png)
![](IMG-20251213231213885.png)
All STL can be erased in this way.

# Stream Iterator
![](IMG-20251213231213953.png)
