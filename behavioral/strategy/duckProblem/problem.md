# Duck Problem

Uma empresa de jogos de texto tem um jogo chamado duck survival, neste jogo tem vários tipos de patos, pato normal, pato de plástico e etc. O problema é que um comportamento de voar e falar está sendo repetido por todos os tipos de patos, porém um pato normal não faz o mesmo quack que um pato de borracha.

### Diagrama
```mermaid
classDiagram
    class Duck{
        -FlyBehavior flybehavior
        -QuackBehavior quackBehavior
        +processFly() void
        +processQuack() void
    }


    class FlyBehavior{
        <<interface>>
        +fly() void
    }

    class QuackBehavior{
        <<interface>>
        +quack() void
    }

    class FlyWithWings{

    }

    class NoFly{

    }

    class NaturalQuackBehavior{

    }
    class QuickQuackBehavior{

    }

    Duck --o FlyBehavior :fly
    Duck --o QuackBehavior : quack
    NoFly ..|> FlyBehavior
    FlyWithWings ..|> FlyBehavior
    
    NaturalQuackBehavior ..|> QuackBehavior
    QuickQuackBehavior ..|> QuackBehavior
```
## Run

### Rode o código

` python3.10 index.py`
