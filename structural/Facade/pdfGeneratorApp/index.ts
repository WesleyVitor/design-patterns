import { jsPDF } from "jspdf";

interface IAppGenerator {
  generate(filename: string, content: string): void;
}

class Client {
  private _appGenerator: IAppGenerator;
  constructor(appGenerator: IAppGenerator) {
    this._appGenerator = appGenerator;
  }
  executeGeneration(filename: string, content: string) {
    this._appGenerator.generate(filename, content);
  }
}

class GeneratorFacade implements IAppGenerator {
  private doc: jsPDF;
  constructor() {
    this.doc = new jsPDF();
  }
  generate(filename: string, content: string): void {
    this.doc.text(content, 10, 10);
    if (!filename.includes(".pdf")) {
      filename = filename + ".pdf";
    }
    this.doc.save(filename);
  }
}

const facade = new GeneratorFacade();
const client = new Client(facade);
client.executeGeneration("file", "Hello Facade!");
