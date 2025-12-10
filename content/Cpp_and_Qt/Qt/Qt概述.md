# 数据类型

头文件：`<QtTypes>` in `<QtGlobal>`

![](IMG-20251210185539768.png)
![](IMG-20251210185539793.png)

# Log 调试
![](IMG-20251210185539816.png)
![](IMG-20251210185539841.png)

# Qt 字符串
# `QByteArray`
![](IMG-20251210185540063.png)
![](IMG-20251210185540089.png)
![](IMG-20251210185540115.png)
![](IMG-20251210185540226.png)
![](IMG-20251210185540266.png)

## `QString`
![](IMG-20251210185540297.png)
- 方法和 `QByteArray` 大同小异
- 查找替换多了大小写敏感性参数
![](IMG-20251210185540433.png)
- 内带编码格式

## 格式化
![](IMG-20251210185540460.png)
![](IMG-20251210185540487.png)
![](IMG-20251210185540624.png)
![](IMG-20251210185540652.png)

# `QVariant`
![](IMG-20251210185540682.png)
![](IMG-20251210185540710.png)
![](IMG-20251210185540824.png)
-  `q.canConvert<int>();`
![](IMG-20251210185540854.png)
- `q.value<>()`
## 自定义类
要想装在 `QVariant` 里，要 `Q_DECLARE_METATYPE`
![](IMG-20251210185540881.png)

# 位置与尺寸
## `QPoint`
![](IMG-20251210185541009.png)
- `[static]: dotProduct()`

# `QLine`
![](IMG-20251210185541038.png)
- `translate()`: 偏移（有副作用，`translated`无副作用）
![](IMG-20251210185541197.png)

# `QSize`
![](IMG-20251210185541227.png)
`void scale(int width, int height,  Qt::AspectRatioMode mode)`
同样有 `scaled` 无副作用版本
![](IMG-20251210185541338.png)
![](IMG-20251210185541366.png)

# `QRect`
![](IMG-20251210185541392.png)
![](IMG-20251210185541513.png)
![](IMG-20251210185541540.png)

***以上类还有浮点版本 `QPointF`, etc***

