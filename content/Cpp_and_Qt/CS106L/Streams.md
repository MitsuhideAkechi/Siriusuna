![](IMG-20251210185535999.png)

# What is stream?
![](IMG-20251210185536021.png)
![](IMG-20251210185536138.png)
![](IMG-20251210185536163.png)
![](IMG-20251210185536186.png)
# String Stream
![](IMG-20251210185536314.png)
![](IMG-20251210185536338.png)
![](IMG-20251210185536466.png)
![](IMG-20251210185536595.png)
![](IMG-20251210185536623.png)
![](IMG-20251210185536648.png)
```cpp
#include <iostream>
#include <sstream>

int main()
{
    std::ostringstream oss("Hello", std::ostringstream::ate);
    std::cout << oss.str() << std::endl; // Hello
    oss << 100;
    std::cout << oss.str() << std::endl; // Hello100
    return 0;
}
```

![](IMG-20251210185536672.png)
![](IMG-20251210185536787.png)

**Types matters!**
![](IMG-20251210185536813.png)
The operator returns the stream itself so that we can call them in a chain.

![](IMG-20251210185536840.png)

# State Bit
![](IMG-20251210185536955.png)
![](IMG-20251210185537085.png)
![](IMG-20251210185537113.png)
- `iss.good()` --> bool: true
- `iss.fail()` --> bool: false
- `iss.eof()`
- `iss.bad()` 
![](IMG-20251210185537250.png)

```cpp
#include <iostream>
#include <sstream>
int main()
{
    std::ostringstream oss;
    std::istringstream iss;
    int a;
    std::cout << iss.eof() << std::endl; // 0
    iss >> a;
    std::cout << iss.fail() << " " << iss.eof() << std::endl; // 1 1
    return 0;
}
```
# `cout` and `cin`
![](IMG-20251210185537279.png)
![](IMG-20251210185537307.png)
![](IMG-20251210185537334.png)

How to deal with?
![](IMG-20251210185537455.png)
(The delimiter will be skipped and discarded)  
(Though, it will not skip a leading delimiter!)

## `std::endl`
`/n` + flush.
![](IMG-20251210185537482.png)
![](IMG-20251210185537510.png)
```cpp
std::istringstream iss("   hello");
std::string s;
iss >> std::ws >> s;   // 跳过前导空白字符
std::cout << s;        // 输出 "hello"
```
```cpp
std::cout << std::boolalpha;
std::cout << true << " " << false << std::endl;
// 输出：true false

std::cout << std::noboolalpha;
std::cout << true << " " << false << std::endl;
// 输出：1 0
```
```cpp
#include <iomanip> // 头文件！

double pi = 3.1415926535;
std::cout << std::setprecision(3) << pi << std::endl;
// 输出：3.14（默认是有效数字）

std::cout << std::fixed << std::setprecision(3) << pi << std::endl;
// 输出：3.142（保留小数位数）
```
![](IMG-20251210185537643.png)

![](IMG-20251210185537692.png)

![](IMG-20251210185537722.png)