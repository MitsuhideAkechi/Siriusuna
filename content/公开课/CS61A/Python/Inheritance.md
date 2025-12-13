_**Inheritance is a method for relating multiple classes together.**_

A common use : Two similar classes differ in their degree of _specialization_.  
The specialized class may have the same attributes as the general class, along with some special-case behavior.  
Syntax:
```python
class <name>(<base class>):
	<suite>
```
Conceptually, the new subclass "shares" attributes with its base class.  
The subclass may _override_ certain inherited attributes.  
Using inheritance, we implement a subclass by specifying its differences from the base class, and everything else stay the same.

E.g.
```python
class CheckingAccount(Account):
	"""A bank account that charges for withdrawals."""
	withdraw_fee = 1
	interest = 0.01
	def withdraw(self, amount):
		return Account.withdraw(self, amount + self.withdraw_fee)
```

Base class attributes _are not copied_ into subclasses!  

To look up a name in a class.
1. If it names an attribute in the class, return the attribute value.
2. Otherwise, look up the name in the base class, if there is one.
3. Or, look up in the base class of the base class until find one. ^cy20w2
```python
>>> ch = CheckingAccount('Tom') # Calls Account.__init__  
>>> ch.interest # Found in CheckingAccount  
0.01  
>>> ch.deposit(20) # Found in Account  
20  
>>> ch.withdraw(5) # Found in CheckingAccount 
14
```

We can use `super()` to refer to the superclass of `self`, and access any superclass methods as if we were an instance of the superclass.
# Multiple Inheritance
_**Multiple inheritance is when a subclass has multiple base classes.**_

A class may inherit from multiple base classes in Python.  

E.g.
```python
class SavingsAccount(Account):
    deposit_fee = 2
    def deposit(self, amount):
        return Account.deposit(self, amount - self.deposit_fee)

class AsSeenOnTVAccount(CheckingAccount, SavingsAccount):
    def __init__(self, account_holder):
        self.holder = account_holder
        self.balance = 1  # A free dollar!


>>> such_a_deal = AsSeenOnTVAccount("Mistuhide")
>>> such_a_deal.balance
1
>>> such_a_deal.deposit(20) # SavingAccount method
19
>>> such_a_deal.withdraw(5) # CheckingAccount method
13
```

## Complicated Inheritance
_**Multiple inheritance tends to make programs complicated.**_  
_**so it should be used very rarely indeed if we want to design clear programs.**_

### Inheritance Order
In Python's multiple inheritance, when two parent classes both override a certain attribute, which version the subclass inherits depends on the Method Resolution Order (MRO). Python uses the C3 linearization algorithm to determine the MRO. Here is a detailed explanation:

#### Left-to-Right Search Order
Python searches for attributes in the order that the parent classes appear when the subclass is defined, from left to right.  
For example:
```python
class Parent1:
    attr = "parent1_value"
class Parent2:
    attr = "parent2_value"
class Child(Parent1, Parent2):
    pass
obj = Child()
print(obj.attr)  # Outputs "parent1_value"
```
Here, the `Child` class inherits from `Parent1` and `Parent2`, and both parent classes have the `attr` attribute. Since `Parent1` comes first in the inheritance list of the `Child` class definition, when the `Child` class instance `obj` accesses the `attr` attribute, it gets the value of the `attr` attribute in `Parent1`. If the definition of the `Child` class is changed to `class Child(Parent2, Parent1):`, then the output will be `"parent2_value"`.

#### C3 Linearization Algorithm for Complex Inheritance Structures
When there is a more complex inheritance structure, such as diamond inheritance (where multiple parent classes have a common base class), the C3 linearization algorithm ensures a definite and consistent attribute lookup order.  
For example:
```python
class GrandParent:
    attr = "grandparent_value"
class Parent1(GrandParent):
    attr = "parent1_value"
class Parent2(GrandParent):
    attr = "parent2_value"
class Child(Parent1, Parent2):
    pass
obj = Child()
print(obj.attr)  # According to the C3 linearization algorithm, the output is "parent1_value"
```
In this example, both `Parent1` and `Parent2` inherit from `GrandParent`, and the `Child` class inherits from both `Parent1` and `Parent2` through multiple inheritance. The C3 linearization algorithm takes into account the inheritance relationships comprehensively, determines the lookup path from left to right, and preferentially selects the `attr` attribute in `Parent1`.