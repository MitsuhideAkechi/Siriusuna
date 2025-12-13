![](IMG-20251213231152486.png)
> **The third line above is `post '/movies' => 'movies#create', :as => 'movies'`**

_**Eight line all in [`resources 'movies'`](https://www.doubao.com/chat/collection/23615426789886466?type=Thread).**_  
(One more is `PATCH` update(partial))

`:as` name should be singular when it applies to one resource, plural when it applies to the collection.

Rails route which is abstract, subtle different from concrete HTTP route(HTTP Method + URI).

> Rails 的 route 是对 HTTP route 的抽象，是“匹配并分发”这一层的定义。
> 可以理解为：**Rails route = HTTP route 模式 + 控制器映射。**

# The Root Route
![](IMG-20251213231152687.png)

# An Example
![](IMG-20251213231153743.png)
The way controller renders a view is that rails will automatically find the corresponding view file and analyze, run all pre-processor needed (`haml`->`html` in this case) and eventually convert it into HTML, JSON etc that browser can handle with and then return.

# Route Helper Functions
![](IMG-20251213231154921.png)
`as: xxx`  
Then xxx_path will be evaluated to a route that `:as`'s value is `xxx`.

![](IMG-20251213231155974.png)

# Summary

![](IMG-20251213231156886.png)

![](IMG-20251213231157804.png)

# Routes for Association
![](IMG-20251213231158611.png)

![](IMG-20251213231159375.png)
`movie_reviews_path(m)` in line 3

![](IMG-20251213231200359.png)
![](IMG-20251213231200942.png)

