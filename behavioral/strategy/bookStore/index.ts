enum TypeProducts {
  LIVRO_FISICO,
  LIVRO_DIGITAL,
  REVISTA_FISICA,
  REVISTA_DIGITAL,
  JOGO_TABULEIRO,
  JOGO_VIDEO_GAME_FISICO,
  JOGO_VIDEO_GAME_DIGITAL,
}

interface DiscountBehavior {
  discount(product: Product): number;
}

class Discount30 implements DiscountBehavior {
  discount(product: Product): number {
    const types_allows = [
      TypeProducts.JOGO_TABULEIRO,
      TypeProducts.REVISTA_FISICA,
      TypeProducts.LIVRO_DIGITAL,
      TypeProducts.LIVRO_FISICO,
    ];
    if (!(product.type in types_allows)) return 0;
    const discountValue = 0.3;
    return 1 - discountValue;
  }
}

class Discount15 implements DiscountBehavior {
  discount(product: Product): number {
    const types_allows = [
      TypeProducts.REVISTA_DIGITAL,
      TypeProducts.LIVRO_DIGITAL,
      TypeProducts.LIVRO_FISICO,
    ];
    if (!(product.type in types_allows)) return 0;

    const discountValue = 0.15;
    return 1 - discountValue;
  }
}

class withoutDiscount implements DiscountBehavior {
  discount(product: Product): number {
    const types_allows = [
      TypeProducts.JOGO_VIDEO_GAME_DIGITAL,
      TypeProducts.JOGO_VIDEO_GAME_FISICO,
    ];
    if (!(product.type in types_allows)) return 1;

    const discountValue = 0;
    return 1 - discountValue;
  }
}
class Product {
  private _name: string;
  private _price: number;
  private _type: TypeProducts;
  constructor(name: string, price: number, type: TypeProducts) {
    this._name = name;
    this._price = price;
    this._type = type;
  }

  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get type() {
    return this._type;
  }
}

class Item {
  private _product: Product;
  private _amount: number;
  private _discountBehavior: DiscountBehavior;
  constructor(
    amount: number,
    product: Product,
    discountBehavior: DiscountBehavior
  ) {
    this._amount = amount;
    this._product = product;
    this._discountBehavior = discountBehavior;
  }

  itemValue() {
    /* Usando polimorfismo podemos adicionar qualquer desconto para qualquer, desde de que
    a classe do desconto implemente o método discount.
    Desta forma podemos obedecer utilizar o o padrão de projeto Strategy
    */
    const discount = this._discountBehavior.discount(this._product);
    const value = this._product.price * this._amount * discount;
    return value;
  }
}

class Sale {
  private _items: Item[];
  constructor(items: Item[]) {
    this._items = items;
  }

  pay(): number {
    let sum = 0;
    for (const item of this._items) {
      sum += item.itemValue();
    }

    return sum;
  }
}

class Main {
  execute() {
    const livro1 = new Product(
      "Use a cabeça: Design Patterns",
      200,
      TypeProducts.LIVRO_FISICO
    );
    const videoGame1 = new Product(
      "Nintendo Switch",
      3500,
      TypeProducts.JOGO_VIDEO_GAME_FISICO
    );
    const desconto = new Discount30();
    const desconto2 = new withoutDiscount();
    const item1 = new Item(2, livro1, desconto);
    const item2 = new Item(1, videoGame1, desconto2);
    const venda1 = new Sale([item1, item2]);

    const resultado = venda1.pay();

    console.log("Valor à Pagar:", resultado);
  }
}

const main1 = new Main();

main1.execute();
