from abc import ABC, abstractmethod
from typing import List

class ObserverInterface(ABC):
    @abstractmethod
    def update(self):
        pass

class Observer(ABC):

    @abstractmethod
    def notifyAll(self):
        pass

    @abstractmethod
    def notifyOne(self,observerInterface: ObserverInterface):
        pass

    @abstractmethod
    def addObserver(self,observerInterface:ObserverInterface):
        pass

    @abstractmethod
    def removeObserver(self,observerInterface:ObserverInterface):
        pass

class Game(Observer):
    

    def __init__(self) -> None:
        self.observers:List[ObserverInterface] = []

    def addObserver(self, observerInterface: ObserverInterface):
        self.observers.append(observerInterface)

    def removeObserver(self, observerInterface: ObserverInterface):
        self.observers.remove(observerInterface)

    def notifyAll(self):
        for observer in self.observers:
            observer.update()
    
    def notifyOne(self, observerInterface: ObserverInterface):
        observerInterface.update()

    def play(self):
        print("JOGUEI")
        self.notifyAll()
    
class Count(ObserverInterface):
    time = 0
    def update(self) -> None:
        Count.time +=1
    

g1 = Game()
count = Count()
g1.addObserver(count)
g1.play()
g1.play()

print("\n")
print(count.time)

