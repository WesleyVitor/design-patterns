#from __future__ import annotations

from abc import ABC, abstractmethod


class FlyBehavior(ABC):
    @abstractmethod
    def fly(self):
        pass

class QuackBehavior(ABC):
    @abstractmethod
    def quack(self):
        pass


class Duck:
    def __init__(self, flyBehavior:FlyBehavior, quackBehavior:QuackBehavior):
        self.flyBehavior:FlyBehavior = flyBehavior
        self.quackBehavior:QuackBehavior = quackBehavior

    def processFly(self):
        return self.flyBehavior.fly()

    def processQuack(self):
        return self.quackBehavior.quack()

class FlyWithWings(FlyBehavior):
    def fly(self):
        return "Voando com asas!"
class NoFly(FlyBehavior):
    def fly(self):
        return "Não Voa!"

class NaturalQuackBehavior(QuackBehavior):
    def quack(self):
        return "Natural Quack"

class QuickQuackBehavior(QuackBehavior):
    def quack(self):
        return "Quick"

nqb = NaturalQuackBehavior()
qqb = QuickQuackBehavior()
fww = FlyWithWings()
nf = NoFly()
pato1:Duck = Duck(fww,nqb)
print("Pato1 - Fly:",pato1.processFly())
print("Pato1 - Quack:",pato1.processQuack())
pato2:Duck = Duck(nf, qqb)
print("Pato2 - Fly:",pato2.processFly())
print("Pato2 - Quack:",pato2.processQuack())