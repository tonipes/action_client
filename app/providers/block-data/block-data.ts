import {Events} from 'ionic-angular';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {AuthData} from '../../providers/auth-data/auth-data';
import 'rxjs/add/operator/map';

/*
  Generated class for the BlockData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BlockData {
  data: any = null;

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
      // this.http.get(auth.address, {headers: auth.headers})
      this.http.get("data/blocks.json")
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

}
