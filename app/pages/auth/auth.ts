import {IonicApp, Events, Page, NavController} from 'ionic-angular';
import {AuthData} from '../../providers/auth-data/auth-data'
import {ActionData} from '../../providers/action-data/action-data'
import {FormBuilder, Validators} from 'angular2/common';

/*
  Generated class for the AuthPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/auth/auth.html',
})
export class AuthPage {
  authForm: any = null;

  constructor(
      public nav: NavController,
      public app: IonicApp,
      public authData: AuthData,
      form: FormBuilder) {

    this.nav = nav;
    this.authForm = form.group({
      server: ["", Validators.required, Validators.nullValidator],
      port: ["", Validators.required, Validators.nullValidator],
      authkey: ["", Validators.required, Validators.nullValidator]
    });
  }

  setAuth() {
    var loading = this.app.getComponent('loading');

    loading.show();

    this.authData.test(this.authForm.value).then(result => {
      this.authData.set(this.authForm.value);
      loading.hide();
    }, error => {
      loading.hide();
    });

  }
}
