![](IMG-20251213231201589.png)

# What is stream?
![](IMG-20251213231202732.png)
![](IMG-20251213231203743.png)
![](IMG-20251213231204610.png)
![](IMG-20251213231205387.png)
# String Stream
![](IMG-20251213231205400.png)
![](IMG-20251213231206172.png)
![](IMG-20251213231206186.png)
![](IMG-20251213231207261.png)
![](IMG-20251213231208192.png)
![](IMG-20251213231209061.png)
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

![](IMG-20251213231209713.png)
![](IMG-20251213231210233.png)

**Types matters!**
![](IMG-20251213231210713.png)
The operator returns the stream itself so that we can call them in a chain.

![](IMG-20251213231211069.png)

# State Bit
![](IMG-20251213231211531.png)
![](IMG-20251213231212058.png)
![](IMG-20251213231212639.png)
- `iss.good()` --> bool: true
- `iss.fail()` --> bool: false
- `iss.eof()`
- `iss.bad()` 
![](IMG-20251213231212892.png)

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
![](IMG-20251213231213120.png)
![](IMG-20251213231213359.png)
![](IMG-20251213231213517.png)

How to deal with?
![](IMG-20251213231213532.png)
(The delimiter will be skipped and discarded)  
(Though, it will not skip a leading delimiter!)

## `std::endl`
`/n` + flush.
![](IMG-20251213231213732.png)
![](IMG-20251213231213919.png)
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
![](IMG-20251213231213990.png)

![](IMG-20251213231214062.png)

![](IMG-20251213231214093.png)