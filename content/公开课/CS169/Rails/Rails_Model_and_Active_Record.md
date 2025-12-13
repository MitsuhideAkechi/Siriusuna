# Storing Resource as Model
## Record-Oriented Data
_**Data whose attribute is different from each other but with the same structure.**_

If we want to store the data permanently, it has to live somewhere outside the programming language.

**We should convert it between data as stored and data as manipulating.**
![](IMG-20251213231152481.png)  
In Rails, it shall use relationship database like [SQL](SQL.md).  
![](IMG-20251213231152685.png)  

![](IMG-20251213231153706.png)

# Active Record
![](IMG-20251213231154893.png)

### Create != `new`, but `new` and `save`
`.save!` and `.create!` will throw exceptions once saving is failed.
### Read
![](IMG-20251213231155933.png)

### Update and Delete
![](IMG-20251213231156852.png)
![](IMG-20251213231157758.png)
![](IMG-20251213231158569.png)

### Summary
![](IMG-20251213231159340.png)
`update` is used more often now!

### Summary about Active Record
![](IMG-20251213231200319.png)

**What's new in Rails >= 5**
![](IMG-20251213231200902.png)
Hierarchy is good for managing classes common methods and attributes.
## Database and Migration
![](IMG-20251213231201845.png)

![](IMG-20251213231201873.png)  
`schema.rb` is a executable file which re-create the schema in another database.

Create:  
![](IMG-20251213231202997.png)  
Change:  
![](IMG-20251213231203900.png)
# Summary
![](IMG-20251213231204763.png)
