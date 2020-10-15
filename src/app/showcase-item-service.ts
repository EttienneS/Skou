import { Injectable } from '@angular/core';
import { IShowcaseItem } from './IShowcaseItem';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseItemService {
  showcaseitems: IShowcaseItem[] = [
    {
      name: 'Item 1',
      liked: false,
    },
    {
      name: 'Item 2',
      liked: true,
    },
    {
      name: 'Item 3',
      liked: true,
    },
    {
      name: 'Item 4',
      liked: true,
    },
    {
      name: 'Item 5',
      liked: false,
    },
    {
      name: 'Item 6',
      liked: false,
    },
  ];

  get() {
    return this.showcaseitems;
  }

  add(showcaseItem: IShowcaseItem) {
    this.showcaseitems.push(showcaseItem);
  }

  delete(showcaseItem: IShowcaseItem) {
    const index = this.showcaseitems.indexOf(showcaseItem);
    if (index >= 0) {
      this.showcaseitems.splice(index, 1);
    }
  }

  update(showcaseItem: IShowcaseItem) {

    // todo: actually implement this
    // const index = this.showcaseitems.indexOf(showcaseItem);
    // this.showcaseitems[index] = showcaseItem;
  }
}
