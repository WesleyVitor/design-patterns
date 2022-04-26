class Cat
    attr_accessor :age, :weight, :name
    def initialize(_age, _weight, _name)
        @age = _age
        @weight = _weight
        @name = _name
    end
end

class CatChannel
    def put(cat)
        raise "#{self.class} need Implements this method"
    end

    def close
        raise "#{self.class}Implements this method"
    end
end


class CatChannelAdapter < CatChannel
    attr_accessor :binaryChannel

    def initialize(_binaryChannel) 
        @binaryChannel = _binaryChannel
    end

    def put(cat)
        if @binaryChannel != nil
            @binaryChannel.write(cat)
        else
            raise "Channel is Nil"
        end
    end

    def close
        @binaryChannel = nil
    end


end

class BinaryChannel
    def write(cat)
        writeInt(cat.age)
        writeFloat(cat.weight)
        writeUTF(cat.name)
    end

    def writeInt(age)
        puts age
    end

    def writeFloat(weight)
        puts weight
    end

    def writeUTF(name)
        puts name
    end

end

class Client
    attr_accessor :catChannel
    def initialize(_catChannel)
        @catChannel = _catChannel
    end


    def execute(cat)
        @catChannel.put(cat)
    end

    def executeClose
        @catChannel.close()
    end
end


cat1 = Cat.new(4, 20, "Bibi")
bc = BinaryChannel.new
adapter = CatChannelAdapter.new(bc)
client = Client.new(adapter)
client.execute(cat1)
client.executeClose
client.execute(cat1)
