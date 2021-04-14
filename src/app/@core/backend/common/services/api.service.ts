export class ApiService {
  url: any;
  constructor() {
    // local server
    // this.url = 'http://localhost:3000/';

    // production server
    this.url = 'http://18.222.231.105:3000/'
  }
}
