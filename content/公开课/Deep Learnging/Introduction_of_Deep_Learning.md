# 什么是机器学习
![](IMG-20251213231426323.png)

## 机器学习的任务
![](IMG-20251213231426368.png)
![](IMG-20251213231426548.png)
![](IMG-20251213231426751.png)

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
![](IMG-20251213231426929.png)
2. 
![](IMG-20251213231426948.png)
![](IMG-20251213231427120.png)
（Loss 越大，参数越糟糕）
![](IMG-20251213231427293.png)
3. 
![](IMG-20251213231427487.png)
![](IMG-20251213231427681.png)
![](IMG-20251213231427715.png)
![](IMG-20251213231427891.png)
![](IMG-20251213231427910.png)

Summary：
![](IMG-20251213231428094.png)
![](IMG-20251213231428232.png)
- Linear Model

## Improvement
_**Concept:**_
- Model bias
- Activation Function
	- (Hard) Sigmoid
	- ReLU
- Epoch
- Update
![](IMG-20251213231428344.png)
![](IMG-20251213231428361.png)
![](IMG-20251213231428471.png)
![](IMG-20251213231428494.png)
![](IMG-20251213231428572.png)

Constant + (Sigmoid->)Hard Sigmoid -> Piecewise Function -> Continuous Curve

**_Sigmoid 调整_**
![](IMG-20251213231428602.png)

![](IMG-20251213231428637.png)

_**New Model**_
![](IMG-20251213231428691.png)

矩阵表示：
![](IMG-20251213231428727.png)
![](IMG-20251213231428763.png)
![](IMG-20251213231428796.png)
![](IMG-20251213231428831.png)
![](IMG-20251213231428866.png)
![](IMG-20251213231428898.png)
1. 
![](IMG-20251213231428948.png)
2. 
![](IMG-20251213231428978.png)
3. 
![](IMG-20251213231429009.png)
![](IMG-20251213231429040.png)
![](IMG-20251213231429090.png)
![](IMG-20251213231429121.png)
![](IMG-20251213231429155.png)
[Batch_and_Momentum](Batch_and_Momentum.md)
## More Changes
![](IMG-20251213231429186.png)
![](IMG-20251213231429218.png)
- Add _**Layers**_
![](IMG-20251213231429250.png)
此即 _**神经网络**_、 _**深度学习**_
![](IMG-20251213231429285.png)
Deep = Many hidden layers

![](IMG-20251213231429322.png)
_**隐藏层 = 线性变换 + 激活函数**_

## Overfitting（过拟合）
![](IMG-20251213231429354.png)


为什么要把学习变深，而不是变“胖”，只加 ReLU 之类的数量，而不加层数？
—— 后续内容

# Summary
![](IMG-20251213231429437.png)