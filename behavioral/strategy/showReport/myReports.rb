require "prawn"
module Reports
    class ReportStrategy
        # Abstract Class
        def execute(content, filename)
            raise "#{self.class} has method to implemented  "
        end
    end

    class ReportToTextFile < ReportStrategy
        def execute(content, filename)
            filename = filename + ".txt"
            File.write(filename, content, mode:"w")
        end
    end

    class ReportToPDFFile < ReportStrategy
        def execute(content, filename)
            filename = filename + ".pdf"
            
            pdfGenerate = Prawn::Document.new do |pdf|
                pdf.text content
            end

            pdfGenerate.render_file(filename)
        end
    end
end