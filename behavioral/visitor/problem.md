# Sum Product Tax Problem

Uma empresa internacional necessita que o seu programa calcule as somas dos produtos exportados, mas com determinadas taxas que variam de pais para pais, porém quando você fizer de um único não poderá mudar o código dos componentes vendidos

### Diagrama
```mermaid
classDiagram
    
    class Client{

    }

    class Visitor{
        <<abstract>>
        visitorElement(Component Component)
    }

    class BrazilTaxVisitor{

    }

    class Component{
        <<abstract>>
        accepted(Visitor Visitor) int
    }

    class Cake{

    }

    Client --> Visitor
    BrazilTaxVisitor --|> Visitor
    Client "1" --> "*" Component
    Cake --|> Component



```
## Run

### Rode o código

` python3.10 index.py`
