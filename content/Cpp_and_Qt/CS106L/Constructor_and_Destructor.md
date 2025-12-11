![](IMG-20251211101617871.png)
![](IMG-20251211101617904.png)

An example:
![](IMG-20251211101617939.png)
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
![](IMG-20251211101617970.png)
# Copy Operation
When we did not define our own copy constructor, cpp will generate one for us which just simply copy every single value.
![](IMG-20251211101618032.png)
![](IMG-20251211101618067.png)
![](IMG-20251211101618103.png)
![](IMG-20251211101618196.png)

_**So, what a copy constructor or assignment needs to do?**_
![](IMG-20251211101618234.png)
- Copy constructor
![](IMG-20251211101618278.png)
- Copy assignment
Not a constructor, but a [Overloading of `=`](Operator_Overloading.md)!

## Prevent from Copying
![](IMG-20251211101618319.png)

# When Own Special Member Function is Needed?
![](IMG-20251211101618357.png)
![](IMG-20251211101618387.png)
![](IMG-20251211101618429.png)

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
![](IMG-20251211101618466.png)
But something is optimized after c++17 which called [Move_Semantics](Move_Semantics.md).

# Move Operation
- [Move constructor](Move_Semantics.md)
- [Move assignment](Operator_Overloading.md)
