import {Component, Input, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {BlockStatuslight} from '../block-statuslight/block-statuslight';

/*
  Generated class for the Block component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
function toComponent(template, directives = []) {

  @Component({ selector: 'block-container', template, directives })
  class ContainerComponent {
    test = "asdasd"
    @Input() blockData;
    ngOnInit() {
      console.log("assad")
      console.log(this.blockData)
    }
  }
  return ContainerComponent;

}

function findBlockType(type, components = []) {
  console.log(components)
}

@Component({
  selector: 'block',
  template: "<ion-card><div #container></div></ion-card>",
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class Block {
  @Input() blockData;

  htmlbase: string;
  blockTypes = [BlockStatuslight];

  constructor(public loader: DynamicComponentLoader, public elementRef: ElementRef) {}

  ngOnInit(){
    findBlockType(this.blockData.type, this.blockTypes);
    var html = '<' + this.blockData.type + '></' + this.blockData.type + '>'
    this.loader.loadIntoLocation(toComponent(this.blockData.type , this.blockTypes), this.elementRef,'container').then((compref)=>{
        compref.instance.blockData = this.blockData;
    });
  }
}
