# Storing Resource as Model
## Record-Oriented Data
_**Data whose attribute is different from each other but with the same structure.**_

If we want to store the data permanently, it has to live somewhere outside the programming language.

**We should convert it between data as stored and data as manipulating.**
![](IMG-20251211101554893.png)  
In Rails, it shall use relationship database like [SQL](SQL.md).  
![](IMG-20251211101554937.png)  

![](IMG-20251211101554983.png)

# Active Record
![](IMG-20251211101555026.png)

### Create != `new`, but `new` and `save`
`.save!` and `.create!` will throw exceptions once saving is failed.
### Read
![](IMG-20251211101555073.png)

### Update and Delete
![](IMG-20251211101555123.png)
![](IMG-20251211101555178.png)
![](IMG-20251211101555258.png)

### Summary
![](IMG-20251211101555313.png)
`update` is used more often now!

### Summary about Active Record
![](IMG-20251211101555402.png)

**What's new in Rails >= 5**
![](IMG-20251211101555461.png)
Hierarchy is good for managing classes common methods and attributes.
## Database and Migration
![](IMG-20251211101555520.png)

![](IMG-20251211101555578.png)  
`schema.rb` is a executable file which re-create the schema in another database.

Create:  
![](IMG-20251211101555654.png)  
Change:  
![](IMG-20251211101555708.png)
# Summary
![](IMG-20251211101555764.png)
