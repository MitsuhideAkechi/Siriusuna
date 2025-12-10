# Classification
![](IMG-20251210185549544.png)
这样会假定不同的类之间的关系远近

## Class as One-Hot Vector
![](IMG-20251210185549568.png)
![](IMG-20251210185549590.png)
Softmax 用于归一化

![](IMG-20251210185549817.png)

当两个 class 时，我们常用 sigmoid ，与 softmax 等价
![](IMG-20251210185549844.png)
![](IMG-20251210185549869.png)

## Loss
![](IMG-20251210185549983.png)
Cross-entropy 如此常用，以至于 pytorch 里，softmax 被放在了 cross-entropy 里
![](IMG-20251210185550007.png)
惩罚模型对分类预测的不自信，因为正确结果越接近 1，Loss 越小，如果结果不正确或者不确信，Loss 就比较大。
![](IMG-20251210185550032.png)

# Example
![](IMG-20251210185550154.png)

