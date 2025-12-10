# `include` & `extend`
在 Ruby 中，模块（Module）中的方法分为两种：**实例方法** 和 **模块自身的方法（模块方法）**。当模块被嵌入类（通过 `include`、`prepend` 或 `extend`）后，这两种方法的调用方式不同，具体取决于你如何定义方法以及如何嵌入模块。
### 1. 模块中的「实例方法」：通过类的实例调用
如果模块中定义的是普通实例方法（没有用 `self` 修饰），当用 `include` 将模块嵌入类后，这些方法会成为**类的实例方法**，可以通过类的实例直接调用。
示例：
```ruby
module MyModule
  # 模块中的实例方法（无 self）
  def greet
    "Hello from module!"
  end
end

class MyClass
  include MyModule  # 嵌入模块，获取其实例方法
end

# 调用方式：通过类的实例调用
obj = MyClass.new
puts obj.greet  # => "Hello from module!"
```
### 2. 模块中的「模块方法」：需通过模块名或类名调用
如果模块中定义的是「模块自身的方法」（用 `self.方法名` 定义，也叫模块方法），这类方法不会因为 `include` 而自动成为类的方法。若要调用，有两种方式：
#### 方式一：直接通过「模块名」调用（最直接）
模块方法本质上是模块自身的方法，无论是否嵌入类，都可以直接通过 `模块名.方法名` 调用：
```ruby
module MyModule
  # 模块方法（用 self 定义）
  def self.foo
    "This is a module method"
  end
end

class MyClass
  include MyModule  # include 不影响模块方法的调用方式
end

# 直接通过模块名调用
puts MyModule.foo  # => "This is a module method"
```
#### 方式二：用 `extend` 嵌入模块，将模块方法转为「类方法」
如果希望模块方法成为类的「类方法」（可通过类名直接调用），需要用 `extend` 而非 `include` 嵌入模块。`extend` 会将模块中的方法（包括模块方法和实例方法）转为类的类方法。
示例：
```ruby
module MyModule
  # 模块方法
  def self.foo
    "This is a module method"
  end

  # 模块中的实例方法（用 extend 嵌入时，会转为类方法）
  def bar
    "This was a module instance method, now a class method"
  end
end

class MyClass
  extend MyModule  # 用 extend 嵌入，模块方法/实例方法均转为类方法
end

# 调用方式：通过类名直接调用
puts MyClass.foo  # => "This is a module method"
puts MyClass.bar  # => "This was a module instance method, now a class method"
```
### 总结
- 模块中的**实例方法**（无 `self`）：用 `include` 嵌入类后，通过**类的实例**调用（`obj.方法名`）。
- 模块中的**模块方法**（有 `self`）：
    - 直接通过**模块名**调用（`模块名.方法名`），无需嵌入类；
    - 若用 `extend` 嵌入类，可通过**类名**调用（`类名.方法名`），此时模块方法转为类方法。
核心区别在于：`include` 用于复用「实例方法」，`extend` 用于复用「类方法」，而模块自身的方法（`self.方法`）本质上属于模块，需通过模块名或 `extend` 转为类方法后调用。

# `prepend`
在 Ruby 中，`prepend` 是一种将模块（Module）嵌入类（Class）的方法，与 `include` 类似，但**方法查找顺序不同**。它的核心作用是：**将模块的方法插入到类的方法查找路径的最前面**，使得模块中的方法会优先于类自身的方法被调用。
### 与 `include` 的核心区别：方法查找顺序
- 当用 `include` 嵌入模块时，模块会被插入到类的**父类之后**。调用方法时，Ruby 会先查找类自身的方法，再查找 `include` 的模块，最后查找父类。
- 当用 `prepend` 嵌入模块时，模块会被插入到类的**自身之前**。调用方法时，Ruby 会先查找 `prepend` 的模块，再查找类自身的方法，最后查找父类和 `include` 的模块。
### 示例：直观理解 `prepend` 的效果
假设我们有一个模块和一个类，两者都定义了同名方法 `greet`：
```ruby
module GreetModule
  def greet
    # 模块中的 greet 方法
    "来自模块的问候！"
  end
end

class Person
  # 用 prepend 嵌入模块（而非 include）
  prepend GreetModule

  # 类自身的 greet 方法
  def greet
    "来自 Person 类的问候！"
  end
end

person = Person.new
puts person.greet  # 输出："来自模块的问候！"
```
可以看到：调用 `person.greet` 时，Ruby 优先执行了 `prepend` 模块中的 `greet` 方法，而非类自身的方法 —— 这就是 `prepend` 改变查找顺序的效果。
### 用 `super` 调用类自身的方法
如果想在模块方法中调用类自身的同名方法，可以用 `super` 关键字（类似继承中的用法）：
```ruby
module GreetModule
  def greet
    # 先执行模块的逻辑，再通过 super 调用类自身的方法
    "#{super}（模块补充：祝你今天愉快！）"
  end
end

class Person
  prepend GreetModule

  def greet
    "来自 Person 类的问候！"
  end
end

person = Person.new
puts person.greet  
# 输出："来自 Person 类的问候！（模块补充：祝你今天愉快！）"
```
这里，模块的 `greet` 先通过 `super` 调用了类自身的 `greet` 方法，再追加了额外逻辑 —— 这是 `prepend` 非常实用的场景（如 “装饰器模式”，在不修改原方法的情况下增强功能）。
### 应用场景
`prepend` 常用于需要 **“包装” 或 “增强” 类原有方法 ** 的场景，而无需修改类的源代码：
- 日志记录：在方法执行前后添加日志；
- 权限校验：调用方法前先检查权限；
- 数据过滤：对方法的输入 / 输出进行处理。
### 总结
`prepend` 是 Ruby 中用于嵌入模块的关键字，其核心特性是**改变方法查找顺序**：让模块中的方法优先于类自身的方法被调用。通过 `super`，可以在模块中灵活调用类的原方法，实现无侵入式的功能增强，这使得它在代码复用和扩展中非常有用。

# Mixin(类似多继承)
