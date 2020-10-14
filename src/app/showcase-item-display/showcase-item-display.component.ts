import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';

@Component({
  selector: 'showcase-item-display',
  templateUrl: './showcase-item-display.component.html',
  styleUrls: ['./showcase-item-display.component.css']
})
export class ShowcaseItemDisplayComponent {
  
  @Input() showcaseitem: IShowcaseItem;
  @Output() hide = new EventEmitter();
  
  constructor() { }
  
  onHide() {
    console.log("Hide clicked on component!");
    this.hide.emit(this.showcaseitem);
  }
}

