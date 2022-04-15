require './myReports'
class Product
    attr_accessor :name ,:price
    def initialize(_name, _price)
        @name = _name
        @price = _price
    end
end


class Relatorio
    attr_accessor :data, :relatorioStrategy
    def initialize(_data, _reportStrategy)
        @data = _data
        @reportStrategy = _reportStrategy   
    end
    def execute(filename)
        content = ""
        @data.each do |d| 
            content += "Nome:#{d.name}\nPreço:#{d.price}\n"
        end
        # Polimorfismo
        @reportStrategy.execute(content, filename)
    end
end



p1 = Product.new("Vestido Azul", 100)
p2 = Product.new("Vestido Branco", 200)
st1 = Reports::ReportToTextFile.new
st2 = Reports::ReportToPDFFile.new
r1 = Relatorio.new([p1, p2], st2)
r2 = Relatorio.new([p1, p2], st1)
r1.execute("relatorio")