# Classification
![](IMG-20251213231426325.png)
这样会假定不同的类之间的关系远近

## Class as One-Hot Vector
![](IMG-20251213231426370.png)
![](IMG-20251213231426584.png)
Softmax 用于归一化

![](IMG-20251213231426783.png)

当两个 class 时，我们常用 sigmoid ，与 softmax 等价
![](IMG-20251213231426978.png)
![](IMG-20251213231427145.png)

## Loss
![](IMG-20251213231427346.png)
Cross-entropy 如此常用，以至于 pytorch 里，softmax 被放在了 cross-entropy 里
![](IMG-20251213231427513.png)
惩罚模型对分类预测的不自信，因为正确结果越接近 1，Loss 越小，如果结果不正确或者不确信，Loss 就比较大。
![](IMG-20251213231427526.png)

# Example
![](IMG-20251213231427749.png)

