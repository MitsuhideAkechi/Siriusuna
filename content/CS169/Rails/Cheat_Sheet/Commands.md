_**Use `bin/rails` instead of `rails` ensuring to use rails in this develop environment.**_

- Shortcut: `bin/rails g` for `bin/rails generate`
- New model: `bin/rails generate model Product name:string`
- New migration: 
	- `bin/rails generate migration MyNewMigration`
	- `bin/rails generate migration add_fieldname_to_tablename fieldname:string`
- Run migration: `bin/rails db:migrate`
- Roll back database: 
	- `bin/rails db:rollback VERSION=X`
	- `bin/rails db:rollback STEP=2`
- All routes respond to: `bin/rails routes`
- Create a controller with specified action(s) or *add new action(s)* and its test: `bin/rails generate controller Products index`
- bin/rails generate scaffold Product name:string price:decimal description:text: generate all the things below
```plaintext
app/models/product.rb                     # 模型
app/controllers/products_controller.rb    # 控制器（含 index/show/new/edit/create/update/destroy）
app/views/products/                       # 视图文件（7 个）
  ├── index.html.erb
  ├── show.html.erb
  ├── new.html.erb
  ├── edit.html.erb
  ├── _form.html.erb
config/routes.rb                          # 自动添加 resources :products
db/migrate/xxxxxxxxxxxx_create_products.rb # 数据库迁移文件
test/models/product_test.rb               # 测试文件
```
- `bin/rails g resource Product name price description`: model, controller, routes, **without views**.
	- flags:
		- `--skip-routes`
		- `--no-assets`: No helper and style sheet.
- `bin/rails generate authentication`: Create User and Session MVC.
- `bin/rails dev:cache`: Enable [Caching](Caching.md) in development.
- Enable [action text](Rich_Text.md):
```
bin/rails action_text:install
bundle install
bin/rails db:migrate
```