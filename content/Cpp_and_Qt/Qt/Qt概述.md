# 数据类型

头文件：`<QtTypes>` in `<QtGlobal>`

![](IMG-20251211101626372.png)
![](IMG-20251211101626418.png)

# Log 调试
![](IMG-20251211101626464.png)
![](IMG-20251211101626515.png)

# Qt 字符串
# `QByteArray`
![](IMG-20251211101626566.png)
![](IMG-20251211101626613.png)
![](IMG-20251211101626655.png)
![](IMG-20251211101626709.png)
![](IMG-20251211101626750.png)

## `QString`
![](IMG-20251211101626785.png)
- 方法和 `QByteArray` 大同小异
- 查找替换多了大小写敏感性参数
![](IMG-20251211101626832.png)
- 内带编码格式

## 格式化
![](IMG-20251211101626870.png)
![](IMG-20251211101626908.png)
![](IMG-20251211101626941.png)
![](IMG-20251211101626986.png)

# `QVariant`
![](IMG-20251211101627020.png)
![](IMG-20251211101627068.png)
![](IMG-20251211101627113.png)
-  `q.canConvert<int>();`
![](IMG-20251211101627159.png)
- `q.value<>()`
## 自定义类
要想装在 `QVariant` 里，要 `Q_DECLARE_METATYPE`
![](IMG-20251211101627216.png)

# 位置与尺寸
## `QPoint`
![](IMG-20251211101627256.png)
- `[static]: dotProduct()`

# `QLine`
![](IMG-20251211101627296.png)
- `translate()`: 偏移（有副作用，`translated`无副作用）
![](IMG-20251211101627338.png)

# `QSize`
![](IMG-20251211101627382.png)
`void scale(int width, int height,  Qt::AspectRatioMode mode)`
同样有 `scaled` 无副作用版本
![](IMG-20251211101627424.png)
![](IMG-20251211101627462.png)

# `QRect`
![](IMG-20251211101627506.png)
![](IMG-20251211101627551.png)
![](IMG-20251211101627597.png)

***以上类还有浮点版本 `QPointF`, etc***

