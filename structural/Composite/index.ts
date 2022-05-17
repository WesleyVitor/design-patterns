abstract class Contribuite{
    abstract contribuicao():number;
}

class Pessoa extends Contribuite{
    contribuicao(): number {
        return 10;
    }
}

class Empresa extends Contribuite{
    contribuicao(): number {
        return 5;
    }
}

class Provincia extends Contribuite{
    private contribuites:Contribuite[] = [];

    add(contribuite:Contribuite){
        this.contribuites.push(contribuite);
    }

    contribuicao(): number {
        let soma:number = 0;
        for(const c of this.contribuites){
            soma +=c.contribuicao();
        }
        return soma;
    }
}

class Distrito extends Contribuite {
  private contribuites: Contribuite[] = [];

  add(contribuite: Contribuite) {
    this.contribuites.push(contribuite);
  }

  contribuicao(): number {
    let soma: number = 0;
    for (const c of this.contribuites) {
      soma += c.contribuicao();
    }
    return soma;
  }
}

class Cidade extends Contribuite {
  private contribuites: Contribuite[] = [];

  add(contribuite: Contribuite) {
    this.contribuites.push(contribuite);
  }

  contribuicao(): number {
    let soma: number = 0;
    for (const c of this.contribuites) {
      soma += c.contribuicao();
    }
    return soma;
  }
}


const p1 = new Provincia();
const d1 = new Distrito();
const d2 = new Distrito();
const c1 = new Cidade();
const c2 = new Cidade();
const c3 = new Cidade();
const c4 = new Cidade();
const pe1 = new Pessoa();
const pe2 = new Pessoa();
const pe3 = new Pessoa();
const pe4 = new Pessoa();
const e1 = new Empresa();
const e2 = new Empresa();
const e3 = new Empresa();

p1.add(d1);
p1.add(d2);
d1.add(c1);
d1.add(c2);
d2.add(c3);
d2.add(c4);
c1.add(pe1);
c1.add(pe2);
c2.add(e1);
c2.add(e2);
c2.add(e3);
c4.add(pe4)

const c = p1.contribuicao();
console.log('Contribuição da provícia:', c);
