from abc import ABC, abstractmethod
from typing import List


class Visitor(ABC):
    @abstractmethod
    def visitorElement(self,component):
        pass

class BrazilTaxVisitor(Visitor):
    def visitorElement(self,component):
        return component.preco * 1

class Component(ABC):
    @abstractmethod
    def accepted(self, visitor):
        pass
    
class Cake(Component):
    def __init__(self, preco) -> None:
        self.preco  = preco
    
    def accepted(self, visitor):
        return visitor.visitorElement(self)
    

lista:List[Component] = []

b1 = Cake(2)
b2 = Cake(3)


lista.append(b1)
lista.append(b2)

sv = BrazilTaxVisitor()

sum = 0

for p in lista:
    sum +=p.accepted(sv)

print(sum)
