Using the `cache` method, we can store HTML in the cache.
```html
<% cache @product do %>
  <h1><%= @product.name %></h1>
<% end %>
```

First visit:
```plaintxt
Read fragment views/products/show:a5a585f985894cd27c8b3d49bb81de3a/products/1-20240918154439539125 (1.6ms)
Write fragment views/products/show:a5a585f985894cd27c8b3d49bb81de3a/products/1-20240918154439539125 (4.0ms)
```

Then...
```plaintxt
Read fragment views/products/show:a5a585f985894cd27c8b3d49bb81de3a/products/1-20240918154439539125 (1.3ms)
```

