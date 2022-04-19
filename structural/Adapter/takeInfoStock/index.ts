import alpha from "alphavantage";
import dotenv from "dotenv";
dotenv.config();

interface IBankStockInfo {
  infoCompany(codeCompany: string): any;
}
class StockMarketCompany {
  private _codeClientCompany: string;
  private _Ibsi: IBankStockInfo;
  constructor(codeClientCompany: string, Ibsi: IBankStockInfo) {
    this._codeClientCompany = codeClientCompany;
    this._Ibsi = Ibsi;
  }

  get codeClientCompany() {
    return this._codeClientCompany;
  }

  set Ibsi(IbsiValue: IBankStockInfo) {
    this._Ibsi = IbsiValue;
  }

  async infoCompanyClient() {
    return await this._Ibsi.infoCompany(this._codeClientCompany);
  }
}

class TestStockBank implements IBankStockInfo {
  infoCompany(codeCompany: string) {
    return new Promise((resolve, reject) => {
      resolve({ key: codeCompany });
      if (!codeCompany) reject({ key: "Error" });
    });
  }
}

class StockBankAdapter implements IBankStockInfo {
  private _serviceBankStock: ServiceBankStock;
  constructor(serviceBankStock: ServiceBankStock) {
    this._serviceBankStock = serviceBankStock;
  }
  async infoCompany(codeCompany: string) {
    return await this._serviceBankStock.getInfoCompany(codeCompany);
  }
}

class ServiceBankStock {
  async getInfoCompany(name: string) {
    const KEY = process.env.KEY_ACCESSOR || "";
    const el = alpha({ key: KEY });
    return await el.data.search(name);
  }
}
const sbs1 = new ServiceBankStock();
const adapter = new StockBankAdapter(sbs1);
const test = new TestStockBank();
const smc1 = new StockMarketCompany("PETR4.SAO", adapter);
console.log(
  "Info:",
  smc1.infoCompanyClient().then((data) => console.log(data))
);
