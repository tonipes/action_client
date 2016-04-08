import {Page} from 'ionic-angular';
import {ActionListPage} from '../action-list/action-list';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabActions: any = ActionListPage;
}
