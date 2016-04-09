import {Events} from 'ionic-angular';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthData {
  authdata: any = null;

  constructor(public http: Http, public events: Events) {}

  set(authdata) {
    this.events.publish('auth:ready');
    this.authdata = authdata;
  }

  test(data) {
    var address = 'http://' + data.server + ':' + data.port + '/actions'
    var headers = new Headers({'X-Api-Key': data.authkey});
    return new Promise((resolve, reject) => {
      var req = this.http.get(address, {headers: headers});
      req.subscribe(res => {
        if(res.status === 200){
          resolve('Success');
        } else {
          reject('Fail');
        }
      }, error => {
        reject('Fail');
      });
    });
  }

  get() {
    return this.authdata
  }

  getRequestData(){
    var address = 'http://' + this.authdata.server + ':' + this.authdata.port + '/actions'
    var headers = new Headers({'X-Api-Key': this.authdata.authkey});
    return {address:address, headers:headers}
  }
}
