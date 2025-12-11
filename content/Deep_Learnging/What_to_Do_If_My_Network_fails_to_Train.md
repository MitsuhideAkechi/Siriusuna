# General Guide
![](IMG-20251211101638523.png)
## Large Loss in Training
![](IMG-20251211101638551.png)
![](IMG-20251211101638578.png)

### Which One?
![](IMG-20251211101638604.png)
![](IMG-20251211101638709.png)

如果是 Model Bias，那么就换成更大、更有弹性的 Model，如果是 Optimization 的问题，那么...... [When_Gradient_is_Small](When_Gradient_is_Small.md).

## Small Loss in Training
### Large Loss in Test: Overfitting
![](IMG-20251211101638739.png)
![](IMG-20251211101638766.png)
为什么更弹性的模型更容易过拟合？

#### Solution for Overfitting
1. More Training Data / Data Augmentation
![](IMG-20251211101638791.png)
2. Constrain Model
![](IMG-20251211101638816.png)
![](IMG-20251211101638842.png)
不要过度限制！否则会回到 Model Bias
![](IMG-20251211101638869.png)
![](IMG-20251211101638901.png)

#### How to Select Model
![](IMG-20251211101639019.png)
用 Cross Validation 挑选模型，不要过度关注 public Test，防止过拟合在测试上

![](IMG-20251211101639066.png)

### Mismatch
![](IMG-20251211101639155.png)

## [Loss_Function_May_Affect](Loss_Function_May_Affect.md)



# Training Tips
## [Batch_and_Momentum](Batch_and_Momentum.md)
## [Adaptive Learning Rate](Error_Surface_is_Rugged.md)
## Summary
![](IMG-20251211101639199.png)
现在最常用的 Optimizer 是 Adam，但是关于衰减需要自己考虑、指定，Adam 并不包括衰减。

