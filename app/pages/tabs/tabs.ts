import {Page,NavParams} from 'ionic-angular';
import {ActionListPage} from '../action-list/action-list';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  constructor(public navParams: NavParams) {
  }

  tabActions: any = ActionListPage;
}
