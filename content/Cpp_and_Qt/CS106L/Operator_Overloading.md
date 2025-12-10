![](IMG-20251210185532870.png)

# +=
![](IMG-20251210185532892.png)
![](IMG-20251210185532913.png)

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

![](IMG-20251210185533029.png)
or
![](IMG-20251210185533052.png)
# >> and <<
Cannot be a number function, but when we need to access private variable, we could use `friend`.  
![](IMG-20251210185533176.png)
![](IMG-20251210185533209.png)
![](IMG-20251210185533234.png)
# \[]
![](IMG-20251210185533258.png)
![](IMG-20251210185533393.png)

# General Rule of Thumb
![](IMG-20251210185533417.png)
![](IMG-20251210185533442.png)
# =
- Be used to do [copy assignment](Constructor_and_Destructor.md), a special member function which is define by default.
![](IMG-20251210185533466.png)
![](IMG-20251210185533577.png)

- Be used to do [move assignment](Move_Semantics.md), another special member function which is define by default.

# POLA: Principle of Least Astonishment
_**Design operators primarily to mimic conventional usage.**_
![](IMG-20251210185533607.png)
![](IMG-20251210185533630.png)
![](IMG-20251210185533854.png)

# Something else
![](IMG-20251210185533880.png)
