import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ActionData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionData {
  data: any = null;
  address: string = "http://82.130.26.6:8000/actions";
  headers: Headers = new Headers({'X-Api-Key': "48d3a8b27e3c4c30"});

  constructor(public http: Http) {}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get(this.address, {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  sendAction(action) {
    return new Promise(resolve => {
      this.http.put(this.address, '', {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
