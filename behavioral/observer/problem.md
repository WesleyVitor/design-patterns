# Sum Product Tax Problem

Quando Iniciado o jogo deve ser contado a quantidade de vezes no qual uma peça foi jogada, mas deve respeitar o SOLID

### Diagrama
```mermaid
classDiagram
    class Subject{
        <<abstract>>
        notifyAll() void
        notifyOne(ObserverInterface oi) void
    }
    class Game{
        play() void
    }

    class ObserverInterface{
        <<interface>>
        update() void
    }

    class Count{

    }

    Game --|> Subject
    ObserverInterface ..* Subject
    Count ..|> ObserverInterface

    



```
## Run

### Rode o código

` python3.10 index.py`
