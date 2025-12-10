![](IMG-20251210185526286.png)
![](IMG-20251210185526309.png)

An example:
![](IMG-20251210185526448.png)
0. Copy constructor
1. Default constructor
2. Normal constructor
3. _**A FUNCTION PROTOTYPE**_
4. Copy constructor
5. Default constructor
6. Copy constructor
7. 
	- Copy _constructor_
	- Copy _assignment_
	- Copy constructor(For return!)
![](IMG-20251210185526472.png)
# Copy Operation
When we did not define our own copy constructor, cpp will generate one for us which just simply copy every single value.
![](IMG-20251210185526493.png)
![](IMG-20251210185526516.png)
![](IMG-20251210185526635.png)
![](IMG-20251210185526660.png)

_**So, what a copy constructor or assignment needs to do?**_
![](IMG-20251210185526799.png)
- Copy constructor
![](IMG-20251210185526826.png)
- Copy assignment
Not a constructor, but a [Overloading of `=`](Operator_Overloading.md)!

## Prevent from Copying
![](IMG-20251210185526852.png)

# When Own Special Member Function is Needed?
![](IMG-20251210185526878.png)
![](IMG-20251210185527011.png)
![](IMG-20251210185527036.png)

# An Example
```cpp
class MyClass {
public:
    int* ptr;
    MyClass() { ptr = new int(42); }
    MyClass(const MyClass& other) { // 拷贝构造
        ptr = new int(*other.ptr);
    }
    MyClass& operator=(const MyClass& other) { // 拷贝赋值
        if (this != &other) {
            delete ptr;
            ptr = new int(*other.ptr);
        }
        return *this;
    }
    ~MyClass() { delete ptr; }
};

MyClass f() {
    MyClass tmp;
    return tmp;
}
```
```cpp
MyClass a;
a = f();
```
![](IMG-20251210185527060.png)
But something is optimized after c++17 which called [Move_Semantics](Move_Semantics.md).

# Move Operation
- [Move constructor](Move_Semantics.md)
- [Move assignment](Operator_Overloading.md)
