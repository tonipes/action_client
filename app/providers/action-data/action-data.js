import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
/*
  Generated class for the ActionData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionData {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;
    this.data = null;
    // this.address = "http://localhost:9000/actions"
    this.address = "http://localhost:9000/actions"
    this.api_key = "48d3a8b27e3c4c30"
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    // var headers = new Headers()
    // headers.append('X-Api-Key', this.api_key);

    return new Promise(resolve => {
      this.http.get(this.address).subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    // No data processing needed
    return data;
  }
}
