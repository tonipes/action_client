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

  constructor(
    public http: Http,
    public authData: AuthData,
    public events: Events) {}

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
