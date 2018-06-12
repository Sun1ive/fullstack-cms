interface DB {
  MONGOUSER: string;
  MONGOPW: string;
  authURL: string;
  URL: string;
  jwtKey: string;
  PORT: number;
  HOST: string;
  mlabURL: string;
}

class DB implements DB {
  constructor() {
    this.MONGOUSER = 'root';
    this.MONGOPW = 'example';
    this.authURL = `mongodb://${this.MONGOUSER}:${this.MONGOPW}@192.168.44.129:3001`;
    this.URL = 'mongodb://192.168.44.129:3001';
    this.jwtKey = 'Secret';
    this.PORT = 8081;
    this.HOST = '127.0.0.1';
    this.mlabURL = 'mongodb://sunlive:265718@ds139690.mlab.com:39690/fullstack-cms';
  }
}

const db = new DB();

export default db;
