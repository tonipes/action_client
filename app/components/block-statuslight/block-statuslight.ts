import {Component, Input} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

/*
  Generated class for the BlockStatuslight component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'block-statuslight',
  templateUrl: 'build/components/block-statuslight/block-statuslight.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})

export class BlockStatuslight {
  @Input() blockData;

  ngOnInit() {
    console.log("assad")
    console.log(this.blockData)
  }
}
