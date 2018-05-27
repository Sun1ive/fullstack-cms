class DB {
  constructor() {
    this.MONGOUSER = 'root';
    this.MONGOPW = 'example';
    this.authURL = `mongodb://${this.MONGOUSER}:${this.MONGOPW}@192.168.44.129:3001`;
    this.URL = 'mongodb://192.168.44.129:3001';
  }
}

const db = new DB();

export default db;
