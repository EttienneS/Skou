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
  @Output() like = new EventEmitter();

  constructor() {}

  onHide() {
    this.hide.emit(this.showcaseitem);
  }

  onLike() {
    this.showcaseitem.Liked = !this.showcaseitem.Liked;
    this.like.emit(this.showcaseitem);
  }
  
}
