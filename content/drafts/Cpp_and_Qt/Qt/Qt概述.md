# 数据类型

头文件：`<QtTypes>` in `<QtGlobal>`

![](IMG-20251213231701334.png)
![](IMG-20251213231701407.png)

# Log 调试
![](IMG-20251213231701672.png)
![](IMG-20251213231701916.png)

# Qt 字符串
# `QByteArray`
![](IMG-20251213231702199.png)
![](IMG-20251213231702563.png)
![](IMG-20251213231702807.png)
![](IMG-20251213231703029.png)
![](IMG-20251213231703194.png)

## `QString`
![](IMG-20251213231703217.png)
- 方法和 `QByteArray` 大同小异
- 查找替换多了大小写敏感性参数
![](IMG-20251213231703375.png)
- 内带编码格式

## 格式化
![](IMG-20251213231703394.png)
![](IMG-20251213231703542.png)
![](IMG-20251213231703709.png)
![](IMG-20251213231703889.png)

# `QVariant`
![](IMG-20251213231704085.png)
![](IMG-20251213231704251.png)
![](IMG-20251213231704345.png)
-  `q.canConvert<int>();`
![](IMG-20251213231704368.png)
- `q.value<>()`
## 自定义类
要想装在 `QVariant` 里，要 `Q_DECLARE_METATYPE`
![](IMG-20251213231704456.png)

# 位置与尺寸
## `QPoint`
![](IMG-20251213231704476.png)
- `[static]: dotProduct()`

# `QLine`
![](IMG-20251213231704564.png)
- `translate()`: 偏移（有副作用，`translated`无副作用）
![](IMG-20251213231704673.png)

# `QSize`
![](IMG-20251213231704696.png)
`void scale(int width, int height,  Qt::AspectRatioMode mode)`
同样有 `scaled` 无副作用版本
![](IMG-20251213231704778.png)
![](IMG-20251213231704852.png)

# `QRect`
![](IMG-20251213231704872.png)
![](IMG-20251213231704946.png)
![](IMG-20251213231705017.png)

***以上类还有浮点版本 `QPointF`, etc***

