![](IMG-20251211101622121.png)

# +=
![](IMG-20251211101622153.png)
![](IMG-20251211101622188.png)

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

![](IMG-20251211101622220.png)
or
![](IMG-20251211101622256.png)
# >> and <<
Cannot be a number function, but when we need to access private variable, we could use `friend`.  
![](IMG-20251211101622292.png)
![](IMG-20251211101622326.png)
![](IMG-20251211101622361.png)
# \[]
![](IMG-20251211101622397.png)
![](IMG-20251211101622436.png)

# General Rule of Thumb
![](IMG-20251211101622473.png)
![](IMG-20251211101622529.png)
# =
- Be used to do [copy assignment](Constructor_and_Destructor.md), a special member function which is define by default.
![](IMG-20251211101622567.png)
![](IMG-20251211101622603.png)

- Be used to do [move assignment](Move_Semantics.md), another special member function which is define by default.

# POLA: Principle of Least Astonishment
_**Design operators primarily to mimic conventional usage.**_
![](IMG-20251211101622637.png)
![](IMG-20251211101622673.png)
![](IMG-20251211101622711.png)

# Something else
![](IMG-20251211101622746.png)
