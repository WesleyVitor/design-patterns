# Cat Attribute Info Problem

Um canal de saída binário (BinaryChannel) permite escrever valores correspondentes a atributos de instâncias da classe Cat (Cat): respectivamente e em grupos de 3, a idade (writeInt), o peso (writeFloat) e o nome (writeUTF). Interessa, contudo, que as aplicações que trabalham com gatos não tenham contacto directo com o canal binário, sendo apenas colocadas em contacto com o "canal de gatos" (CatChannel). O canal de gatos deve aceitar como parâmetro do construtor o canal binário e deve providenciar um método put (com um argumento Cat). As excepções de entradas e saídas produzidas pelo canal binário devem ser propagadas. O canal deve ainda fornecer uma função close que fecha todos os canais (o de gatos e o binário). Implemente o canal de gatos e uma aplicação que demonstre a utilização.

### Rode o código

` ruby index.rb`
