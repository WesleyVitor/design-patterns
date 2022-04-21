import sqlite3 from "sqlite3";

class ConnectionSingleton {
  private static instance: ConnectionSingleton;

  private static connection: sqlite3.Database;
  private constructor() {}

  static getInstance(): ConnectionSingleton {
    if (this.instance == null) {
      this.instance = new ConnectionSingleton();
    }

    return this.instance;
  }

  openConnectionWithdb(filename: string) {
    if (ConnectionSingleton.connection == null) {
      ConnectionSingleton.connection = new sqlite3.Database(filename);
    }
    return ConnectionSingleton.connection;
  }

  closeConnectionWithdb() {
    if (ConnectionSingleton.connection != null) {
      ConnectionSingleton.connection.close();
    } else {
      throw new Error("Connection no Exists!");
    }
  }
}

class ServiceDB {
  dbquery(query: string, params?: any[]) {
    const dbConnection = ConnectionSingleton.getInstance();
    let db = dbConnection.openConnectionWithdb("./tmp.db");
    return new Promise<any[]>((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

const service = new ServiceDB();
service.dbquery("INSERT INTO User(name, idade) VALUES (?,?)", ["Maria", "18"]);
service.dbquery("INSERT INTO User(name, idade) VALUES (?,?)", ["José", "28"]);
service.dbquery("SELECT * FROM User").then((data) => {
  console.log("Value:", data);
});
service.dbquery("DELETE FROM User WHERE id=?", [1]);
