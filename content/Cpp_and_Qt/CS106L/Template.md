[Generic](Generic.md) in cpp.
![](IMG-20251211101625233.png)

![](IMG-20251211101625273.png)

# How to Deal with Ambiguity?
- 1
```cpp
auto [min, max] = my_minimax(std::string("A"), std::string("C-String"));
```
- 2

```cpp
auto [min, max] = my_minimax<std::string>("A", "C-String");
```

# Concept Lifting
![](IMG-20251211101625307.png)

Example:
![](IMG-20251211101625352.png)
Why Integer? It can't be something else?  
Let's relax this constraint!
![](IMG-20251211101625384.png)
![](IMG-20251211101625422.png)
![](IMG-20251211101625459.png)
![](IMG-20251211101625487.png)
![](IMG-20251211101625531.png)

# Implicit Interface and Concept
A template function defines an implicit interface that each template parameter must satisfy.
![](IMG-20251211101625594.png)
![](IMG-20251211101625625.png)
concept:
```cpp
template <typename C, typename T>
concept IndexableContainer = requires(C c, size_t i, T val) {
    { c.size() } -> std::convertible_to<size_t>;
    { c[i] } -> std::convertible_to<T>;
    { c[i] == val } -> std::convertible_to<bool>;
};
```
![](IMG-20251211101625670.png)

We can make it more generalized by [Lambda_and_Function](Lambda_and_Function.md)!

# Overload Resolution
![](IMG-20251211101625701.png)

# Varadic templates