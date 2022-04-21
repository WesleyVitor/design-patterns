require "singleton"
class School
    include Singleton
    @@departments = Array.new

    def addDepartament(departement)
        @@departments.concat(departement)
    end

    def getDepartaments
        @@departments
    end
    
end

s1 = School.instance
s1.addDepartament(["Geografia", "Informática"])

puts "Departamentos: #{s1.getDepartaments}"
puts School.instance.object_id
puts "\n----------------"
s2 = School.instance
puts School.instance.object_id
s1.addDepartament(["História"])
puts "Departamentos: #{s1.getDepartaments}"
