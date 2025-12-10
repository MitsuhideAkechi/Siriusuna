# 什么是机器学习
![](IMG-20251210185546728.png)

## 机器学习的任务
![](IMG-20251210185546757.png)
![](IMG-20251210185546895.png)
![](IMG-20251210185546929.png)

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
![](IMG-20251210185546962.png)
2. 
![](IMG-20251210185546990.png)
![](IMG-20251210185547109.png)
（Loss 越大，参数越糟糕）
![](IMG-20251210185547259.png)
3. 
![](IMG-20251210185547291.png)
![](IMG-20251210185547410.png)
![](IMG-20251210185547440.png)
![](IMG-20251210185547471.png)
![](IMG-20251210185547596.png)

Summary：
![](IMG-20251210185547622.png)
![](IMG-20251210185547652.png)
- Linear Model

## Improvement
_**Concept:**_
- Model bias
- Activation Function
	- (Hard) Sigmoid
	- ReLU
- Epoch
- Update
![](IMG-20251210185547677.png)
![](IMG-20251210185547803.png)
![](IMG-20251210185547830.png)
![](IMG-20251210185547961.png)
![](IMG-20251210185547991.png)

Constant + (Sigmoid->)Hard Sigmoid -> Piecewise Function -> Continuous Curve

**_Sigmoid 调整_**
![](IMG-20251210185548024.png)

![](IMG-20251210185548057.png)

_**New Model**_
![](IMG-20251210185548187.png)

矩阵表示：
![](IMG-20251210185548218.png)
![](IMG-20251210185548247.png)
![](IMG-20251210185548277.png)
![](IMG-20251210185548394.png)
![](IMG-20251210185548424.png)
![](IMG-20251210185548588.png)
1. 
![](IMG-20251210185548619.png)
2. 
![](IMG-20251210185548650.png)
3. 
![](IMG-20251210185548681.png)
![](IMG-20251210185548814.png)
![](IMG-20251210185548846.png)
![](IMG-20251210185548877.png)
![](IMG-20251210185548906.png)
[Batch_and_Momentum](Batch_and_Momentum.md)
## More Changes
![](IMG-20251210185549024.png)
![](IMG-20251210185549163.png)
- Add _**Layers**_
![](IMG-20251210185549195.png)
此即 _**神经网络**_、 _**深度学习**_
![](IMG-20251210185549308.png)
Deep = Many hidden layers

![](IMG-20251210185549342.png)
_**隐藏层 = 线性变换 + 激活函数**_

## Overfitting（过拟合）
![](IMG-20251210185549374.png)


为什么要把学习变深，而不是变“胖”，只加 ReLU 之类的数量，而不加层数？
—— 后续内容

# Summary
![](IMG-20251210185549512.png)