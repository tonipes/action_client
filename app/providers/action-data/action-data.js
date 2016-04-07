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
    this.address = "http://82.130.26.6:8000/actions";
    this.api_key = "48d3a8b27e3c4c30";
    this.headers = new Headers({
      'X-Api-Key': this.api_key,
    });
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.address, {
        headers: this.headers
      }).subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    // No data processing needed
    return data;
  }

  sendAction(actionid){
    return new Promise(resolve => {
      this.http.post(this.address+'/'+actionid, '' , {
        headers: this.headers
      }).subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }
}
