# Wrapper Type
![](IMG-20251210185522552.png)
For each primitive type, there is a corresponding [reference type](CS61B/Types.md) called wrapper type.

_**Auto-(Un)Boxing:**_ Implicit conversions between wrapper/primitives.
![](IMG-20251210185522571.png)

_**Notice:**_
1. Array are never autoboxed/unboxed(an Integer\[] cannot be used in place of an int\[], or vice versa)
2. Autoboxing/unboxing incurs a measurable performance impact.
3. Wrapper types use much more memory than primitive types.

# Primitive Widening

# Be Care for Ambiguous Conversion
![](IMG-20251210185522594.png)
or, call `long` version:
```java
assertEquals((long)expected, am.get(2));
```
etc
