import {Page, Events, NavController} from 'ionic-angular';
import {ActionSender} from '../../providers/action-sender/action-sender';
import {BlockData} from '../../providers/block-data/block-data';

import {Block} from '../../components/block/block';

/*
  Generated class for the BlockListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/block-list/block-list.html',
  directives: [Block, ]
})
export class BlockListPage {
  blocks: any = null;

  constructor(
      public nav: NavController,
      public actionSender: ActionSender,
      public blockData: BlockData,
      public events: Events) {

    this.events.subscribe('actions:updated', () => {
      this.updateBlocks()
    });

  }

  updateBlocks() {
    this.blockData.load().then(actions => {
      this.blocks = actions.blocks;
      console.log(this.blocks);
    });
  }

  sendAction(action) {
    this.actionSender.send(action.id).then(result => {
      console.log(result)
    });
  }

  onPageWillEnter() {
    this.updateBlocks()
  }
}
