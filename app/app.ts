import 'es6-shim';
import {App, IonicApp, Platform, NavController, Events, Page} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {LoadingModal} from './components/loading-modal/loading-modal';

import {ActionData} from './providers/action-data/action-data';
import {AuthData} from './providers/auth-data/auth-data';

import {TabsPage} from './pages/tabs/tabs';
import {AuthPage} from './pages/auth/auth';
import {ActionListPage} from './pages/action-list/action-list';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  directives: [LoadingModal],
  providers: [AuthData, ActionData, IonicApp, Events]
})
export class MyApp {
  rootPage: any = AuthPage;

  menuPages = [
    { title: 'Authentication', page: AuthPage, index: 1, icon: 'lock' },
    { title: 'Settings', page: AuthPage, index: 2, icon: 'settings' },
    { title: 'Actions', page: ActionListPage, index: 3, icon: 'menu' },
  ];

  constructor(
      public platform: Platform,
      public authData: AuthData,
      public actionData: ActionData,
      public app: IonicApp,
      public events: Events
    ) {

    this.listenToEvents();
    platform.ready().then( () => {
      StatusBar.styleDefault();
    });

  }

  openPage(item) {
    // var nav = this.app.getComponent('main-nav');
    this.rootPage = item.page
  //   nav.push(page.component);
  }

  listenToEvents() {
    this.events.subscribe('auth:ready', () => {
      this.actionData.load()
    });
  }
}
