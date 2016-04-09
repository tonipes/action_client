import {Events} from 'ionic-angular';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {AuthData} from '../../providers/auth-data/auth-data';
import 'rxjs/add/operator/map';

/*
  Generated class for the ActionData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionData {
  data: any = null;
  // address: string = "http://82.130.26.6:8000/actions";
  // headers: Headers = new Headers({'X-Api-Key': "48d3a8b27e3c4c30"});

  constructor(
    public http: Http,
    public authData: AuthData,
    public events: Events) {}

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    if (!this.authData.authdata){
      return Promise.reject('fail');
    }
    var auth = this.authData.getRequestData()
    // don't have the data yet
    return new Promise((resolve, reject) => {
      this.http.get(auth.address, {headers: auth.headers})
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.events.publish('actions:updated');
          resolve(this.data);
        }, error => {
          reject('Fail');
        });
    });
  }

  sendAction(actionid) {
    var auth = this.authData.getRequestData()
    return new Promise(resolve => {
      this.http.post(auth.address + '/' + actionid, '', {headers: auth.headers})
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
