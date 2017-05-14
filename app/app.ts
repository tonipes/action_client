import 'es6-shim';
import {App, IonicApp, Platform, NavController, Events, Page} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {LoadingModal} from './components/loading-modal/loading-modal';

import {ActionSender} from './providers/action-sender/action-sender';
import {BlockData} from './providers/block-data/block-data';
import {AuthData} from './providers/auth-data/auth-data';

// import {TabsPage} from './pages/tabs/tabs';
import {AuthPage} from './pages/auth/auth';
import {BlockListPage} from './pages/block-list/block-list';

@App({
  templateUrl: 'build/app.html',
  config: {
    mode: 'md',
  },
  directives: [LoadingModal],
  providers: [AuthData, ActionSender, IonicApp, Events, BlockData]
})
export class MyApp {
  rootPage: any = BlockListPage;

  menuPages = [
    { title: 'Authentication', page: AuthPage, index: 1, icon: 'lock' },
    { title: 'Settings', page: AuthPage, index: 2, icon: 'settings' },
    { title: 'Blocks', page: BlockListPage, index: 3, icon: 'menu' },
  ];

  constructor(
      public platform: Platform,
      public authData: AuthData,
      public blockData: BlockData,
      public actionSender: ActionSender,
      public app: IonicApp,
      public events: Events
    ) {
      
    this.authData.set({})
    this.blockData.load()

    this.listenToEvents();
    platform.ready().then( () => {
      StatusBar.styleDefault();
    });

  }

  openPage(item) {
    this.rootPage = item.page
  }

  listenToEvents() {
    this.events.subscribe('auth:ready', () => {
      this.blockData.load()
    });
  }
}
