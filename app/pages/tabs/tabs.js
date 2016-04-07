import {Page} from 'ionic-angular';
import {ActionList} from '../action_list/action_list';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.listRoot = ActionList;
  }
}
