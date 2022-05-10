from abc import ABC, abstractmethod
from cryptography.fernet import Fernet
#abstractClass
class Component(ABC):
    @abstractmethod
    def saveInFile(self,message:str, filename:str):
        pass

    @abstractmethod
    def loadByFile(self, filename:str):
        pass

class PersistFile(Component):

    def saveInFile(self,message: str, filename: str):
        with open(filename, 'wb') as file:
            file.write(message)    
    
    def loadByFile(self, filename:str):
        with open(filename, 'rb') as file:
            msg = file.read()
        return msg

class DecoratorBase(Component):
    def __init__(self, component) -> None:
        self.component = component

    def saveInFile(self,message: str, filename: str):
        self.component.saveInFile(message, filename)

    def loadByFile(self, filename: str):
        return self.component.loadByFile(filename)


class Encrypt(DecoratorBase):
    def __init__(self, component) -> None:
        super().__init__(component)
        key = Fernet.generate_key()
        self.fernet = Fernet(key)

    def saveInFile(self, message: str, filename: str):
        messageEncrypted = self.fernet.encrypt(message.encode())
        super().saveInFile(messageEncrypted, filename)
    
    def loadByFile(self, filename: str):
        messageEncrypted = super().loadByFile(filename)
        messageDescrypted = self.fernet.decrypt(messageEncrypted)
        with open('decrypt.txt', 'wb') as decrypted_file:
            decrypted_file.write(messageDescrypted)
        return None
        
pf = PersistFile()

enc = Encrypt(pf)

msg = "Falhimos a empresa! Press F for respect!"
file = "file.txt"
enc.saveInFile(msg, file)

enc.loadByFile(file)

