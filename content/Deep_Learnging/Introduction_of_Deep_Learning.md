# 什么是机器学习
![](IMG-20251211101632156.png)

## 机器学习的任务
![](IMG-20251211101632187.png)
![](IMG-20251211101632237.png)
![](IMG-20251211101632272.png)

## An Example
_**Concepts:**_
- Model
- Feature
- Weight
- Bias
- Label
- Error Surface
- Learning Rate
- Hyperparameter
1. 
![](IMG-20251211101632310.png)
2. 
![](IMG-20251211101632382.png)
![](IMG-20251211101632419.png)
（Loss 越大，参数越糟糕）
![](IMG-20251211101632450.png)
3. 
![](IMG-20251211101632487.png)
![](IMG-20251211101632525.png)
![](IMG-20251211101632559.png)
![](IMG-20251211101632612.png)
![](IMG-20251211101632651.png)

Summary：
![](IMG-20251211101632691.png)
![](IMG-20251211101632727.png)
- Linear Model

## Improvement
_**Concept:**_
- Model bias
- Activation Function
	- (Hard) Sigmoid
	- ReLU
- Epoch
- Update
![](IMG-20251211101632765.png)
![](IMG-20251211101632803.png)
![](IMG-20251211101632835.png)
![](IMG-20251211101632871.png)
![](IMG-20251211101632906.png)

Constant + (Sigmoid->)Hard Sigmoid -> Piecewise Function -> Continuous Curve

**_Sigmoid 调整_**
![](IMG-20251211101632943.png)

![](IMG-20251211101632989.png)

_**New Model**_
![](IMG-20251211101633027.png)

矩阵表示：
![](IMG-20251211101633066.png)
![](IMG-20251211101633102.png)
![](IMG-20251211101633141.png)
![](IMG-20251211101633179.png)
![](IMG-20251211101633215.png)
![](IMG-20251211101633260.png)
1. 
![](IMG-20251211101633297.png)
2. 
![](IMG-20251211101633335.png)
3. 
![](IMG-20251211101633376.png)
![](IMG-20251211101633409.png)
![](IMG-20251211101633448.png)
![](IMG-20251211101633486.png)
![](IMG-20251211101633527.png)
[Batch_and_Momentum](Batch_and_Momentum.md)
## More Changes
![](IMG-20251211101633574.png)
![](IMG-20251211101633613.png)
- Add _**Layers**_
![](IMG-20251211101633653.png)
此即 _**神经网络**_、 _**深度学习**_
![](IMG-20251211101633697.png)
Deep = Many hidden layers

![](IMG-20251211101633735.png)
_**隐藏层 = 线性变换 + 激活函数**_

## Overfitting（过拟合）
![](IMG-20251211101633776.png)


为什么要把学习变深，而不是变“胖”，只加 ReLU 之类的数量，而不加层数？
—— 后续内容

# Summary
![](IMG-20251211101633825.png)