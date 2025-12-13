# General Guide
![](IMG-20251213231426327.png)
## Large Loss in Training
![](IMG-20251213231426372.png)
![](IMG-20251213231426605.png)

### Which One?
![](IMG-20251213231426813.png)
![](IMG-20251213231427000.png)

如果是 Model Bias，那么就换成更大、更有弹性的 Model，如果是 Optimization 的问题，那么...... [When_Gradient_is_Small](When_Gradient_is_Small.md).

## Small Loss in Training
### Large Loss in Test: Overfitting
![](IMG-20251213231427167.png)
![](IMG-20251213231427368.png)
为什么更弹性的模型更容易过拟合？

#### Solution for Overfitting
1. More Training Data / Data Augmentation
![](IMG-20251213231427555.png)
2. Constrain Model
![](IMG-20251213231427776.png)
![](IMG-20251213231427963.png)
不要过度限制！否则会回到 Model Bias
![](IMG-20251213231427977.png)
![](IMG-20251213231428128.png)

#### How to Select Model
![](IMG-20251213231428270.png)
用 Cross Validation 挑选模型，不要过度关注 public Test，防止过拟合在测试上

![](IMG-20251213231428402.png)

### Mismatch
![](IMG-20251213231428417.png)

## [Loss_Function_May_Affect](Loss_Function_May_Affect.md)



# Training Tips
## [Batch_and_Momentum](Batch_and_Momentum.md)
## [Adaptive Learning Rate](Error_Surface_is_Rugged.md)
## Summary
![](IMG-20251213231428530.png)
现在最常用的 Optimizer 是 Adam，但是关于衰减需要自己考虑、指定，Adam 并不包括衰减。

