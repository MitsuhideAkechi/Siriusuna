hash相应to_proc方法，可以直接产生函数映射。

任意Symbol都相应to_proc方法。

&:symbol都可以直接调用其该名称的方法，也就是调用其send。

而&proc可以直接调用定义好的proc，hash可以直接隐式转化为proc。