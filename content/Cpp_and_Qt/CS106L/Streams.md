![](IMG-20251211101624047.png)

# What is stream?
![](IMG-20251211101624103.png)
![](IMG-20251211101624135.png)
![](IMG-20251211101624173.png)
![](IMG-20251211101624202.png)
# String Stream
![](IMG-20251211101624236.png)
![](IMG-20251211101624270.png)
![](IMG-20251211101624310.png)
![](IMG-20251211101624351.png)
![](IMG-20251211101624393.png)
![](IMG-20251211101624422.png)
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

![](IMG-20251211101624469.png)
![](IMG-20251211101624502.png)

**Types matters!**
![](IMG-20251211101624547.png)
The operator returns the stream itself so that we can call them in a chain.

![](IMG-20251211101624589.png)

# State Bit
![](IMG-20251211101624649.png)
![](IMG-20251211101624683.png)
![](IMG-20251211101624727.png)
- `iss.good()` --> bool: true
- `iss.fail()` --> bool: false
- `iss.eof()`
- `iss.bad()` 
![](IMG-20251211101624764.png)

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
![](IMG-20251211101624804.png)
![](IMG-20251211101624849.png)
![](IMG-20251211101624909.png)

How to deal with?
![](IMG-20251211101624952.png)
(The delimiter will be skipped and discarded)  
(Though, it will not skip a leading delimiter!)

## `std::endl`
`/n` + flush.
![](IMG-20251211101625011.png)
![](IMG-20251211101625054.png)
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
![](IMG-20251211101625099.png)

![](IMG-20251211101625133.png)

![](IMG-20251211101625185.png)