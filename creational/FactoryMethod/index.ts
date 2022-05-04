abstract class CreatorContext {
  private city: ICity;
  constructor() {
    this.city = this.cityFactory();
  }

  abstract cityFactory(): ICity;

  public showState() {
    return this.city.showStateByCEP();
  }
}

interface ICity {
  showStateByCEP(): any;
}

class CaicoCity implements ICity {
  showStateByCEP() {
    console.log("Sou do Estado do Rio Grande do Norte");
  }
}

class CreatorContextCaico extends CreatorContext {
  cityFactory(): ICity {
    return new CaicoCity();
  }
}

const ccc = new CreatorContextCaico();
ccc.showState();
