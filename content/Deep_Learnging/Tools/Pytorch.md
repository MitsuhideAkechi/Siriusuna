![](IMG-20251210185553294.png)

# What is PyTorch
![](IMG-20251210185553325.png)
![](IMG-20251210185553352.png)
[PyTorch Documentation]([PyTorch documentation — PyTorch 2.9 documentation](https://docs.pytorch.org/docs/stable/index.html))

# How to Train Network?
[Introduction_of_Deep_Learning](../Introduction_of_Deep_Learning.md)
![](IMG-20251210185553464.png)

## Step 1: Prepare data
![](IMG-20251210185553495.png)
![](IMG-20251210185553525.png)

要使用我们的 dataset，我们要 inherit pytorch 里的 `Dataset `
![](IMG-20251210185553653.png)

`DataLoader` 会如何使用我们的 dataset？
![](IMG-20251210185553797.png)

### About Tensor
![](IMG-20251210185553828.png)

- 创建：
![](IMG-20251210185553860.png)

- 运算
![](IMG-20251210185553984.png)

- 常用操作
![](IMG-20251210185554016.png)
![](IMG-20251210185554063.png)
![](IMG-20251210185554171.png)
![](IMG-20251210185554217.png)
- 数据类型
![](IMG-20251210185554251.png)
- PyTorch vs NumPy
![](IMG-20251210185554389.png)
![](IMG-20251210185554420.png)
- Device
![](IMG-20251210185554563.png)
![](IMG-20251210185554595.png)

- Gradient Calculation
![](IMG-20251210185554705.png)

## Step 2: Model
![](IMG-20251210185554739.png)

![](IMG-20251210185554774.png)
![](IMG-20251210185554894.png)
![](IMG-20251210185554929.png)

- 激活函数
![](IMG-20251210185554963.png)

- Build Own Model: Inherit `nn.Module`
![](IMG-20251210185555094.png)
![](IMG-20251210185555128.png)

## Loss Function
![](IMG-20251210185555160.png)
![](IMG-20251210185555329.png)

# Optimization
![](IMG-20251210185555360.png)
![](IMG-20251210185555409.png)
- 步骤：
![](IMG-20251210185555439.png)

## Step 5：Entire Training Procedure
![](IMG-20251210185555562.png)
- Setup
![](IMG-20251210185555593.png)
- Training Loop
![](IMG-20251210185555627.png)
- Validation Loop
![](IMG-20251210185555751.png)
- Testing Loop
![](IMG-20251210185555782.png)

- 两种模式：
![](IMG-20251210185555816.png)
验证、测试时一定要打开，因为一些 Layer 在不同模式行为不一样。

- 保存
![](IMG-20251210185555848.png)

# More About PyTorch
![](IMG-20251210185555968.png)

# Common Error
![](IMG-20251210185556116.png)
![](IMG-20251210185556152.png)
![](IMG-20251210185556270.png)
![](IMG-20251210185556306.png)
