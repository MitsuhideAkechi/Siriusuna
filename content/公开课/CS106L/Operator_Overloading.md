![](IMG-20251213231201561.png)

# +=
![](IMG-20251213231202603.png)
![](IMG-20251213231203579.png)

# +
Do not do this!
```cpp
MyClass& badFunc() {
    MyClass obj;
    return obj;  // ❌ 返回了局部变量引用！
}

int main() {
    MyClass& ref = badFunc(); // ⚠️ 悬垂引用
}
```

![](IMG-20251213231203596.png)
or
![](IMG-20251213231204421.png)
# >> and <<
Cannot be a number function, but when we need to access private variable, we could use `friend`.  
![](IMG-20251213231204442.png)
![](IMG-20251213231205266.png)
![](IMG-20251213231205997.png)
# \[]
![](IMG-20251213231207097.png)
![](IMG-20251213231208053.png)

# General Rule of Thumb
![](IMG-20251213231208762.png)
![](IMG-20251213231208791.png)
# =
- Be used to do [copy assignment](Constructor_and_Destructor.md), a special member function which is define by default.
![](IMG-20251213231209597.png)
![](IMG-20251213231210108.png)

- Be used to do [move assignment](Move_Semantics.md), another special member function which is define by default.

# POLA: Principle of Least Astonishment
_**Design operators primarily to mimic conventional usage.**_
![](IMG-20251213231210639.png)
![](IMG-20251213231210993.png)
![](IMG-20251213231211451.png)

# Something else
![](IMG-20251213231211818.png)
