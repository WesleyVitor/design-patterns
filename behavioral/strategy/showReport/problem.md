# Show Report Problem

Uma Loja do ramo do varejo necessita que seja feito um relatório dos produtos vendidos por mês. Este relatório deve,por enquanto, ser mostrado em um arquivo Texto, pois a diretoria está vendo se será necessário mostrar o relatório em arquivo PDF.


### Diagrama
```mermaid
classDiagram
    class Relatorio{
        -List~Product~ data
        -ReportStrategy reportStrategy
        +execute(String filename) void
    }
    
    class Product{
        -String name
        -Double price
    }

    class ReportStrategy{
        <<interface>>
        +execute(String content, String filename) void
    }

    class ReportToTextFile{
        
    }

    class ReportToPDFFile{

    }

    Relatorio --o Product : Products
    Relatorio --o ReportStrategy :strategy
    ReportToTextFile ..|> ReportStrategy
    ReportToPDFFile ..|> ReportStrategy
    
    
```
## Run

### Instale as dependências

`bundle install `

### Rode o código

` ruby index.rb`
