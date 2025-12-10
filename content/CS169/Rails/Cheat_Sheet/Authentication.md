# Create
```
bin/rails generate authentication
```
It creates User and Session models and the controllers and views necessary to login to our application.
# Log Out
```html
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <!-- ... -->
  <body>
    <nav>
      <%= link_to "Home", root_path %>
      <%= button_to "Log out", session_path, method: :delete if authenticated? %>
    </nav>

    <main>
      <%= yield %>
    </main>
  </body>
</html>
```
# Unauthenticated Access
```ruby
class ProductsController < ApplicationController
  allow_unauthenticated_access only: %i[ index show ]
  # ...
end
```
# Showing Links for (Un)Authenticated Users Only
```html
<%= link_to "New product", new_product_path if authenticated? %>
```
_**NOTE: `if authenticated?`**_

```html
<%= link_to "Login", new_session_path unless authenticated? %>
```
_**NOTE: `new_session_path`**_
