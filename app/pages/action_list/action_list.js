import {Page} from 'ionic-angular';
import {ActionData} from '../../providers/action-data/action-data';

@Page({
  templateUrl: 'build/pages/action_list/action_list.html'
})

export class ActionList {
  static get parameters() {
    return [[ActionData]];
  }

  constructor(actData) {
    this.actData = actData
    this.actData.load().then(actions => {
      this.actions = actions;
    });
  }

  sendAction(action) {
    this.actData.sendAction(action.id).then(result => {
      console.log(result)
    });
  }
}
