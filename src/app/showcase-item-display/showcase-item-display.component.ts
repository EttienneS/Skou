import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';

@Component({
  selector: 'showcase-item-display',
  templateUrl: './showcase-item-display.component.html',
  styleUrls: ['./showcase-item-display.component.css'],
})
export class ShowcaseItemDisplayComponent {
  @Input() showcaseitem: IShowcaseItem;
  @Output() hide = new EventEmitter();
  @Output() filter = new EventEmitter();

  constructor() {}

  onFilter(tag: string) {
    // bubble up event if anything else subscribes to it
    this.filter.emit(tag);
  }
}
