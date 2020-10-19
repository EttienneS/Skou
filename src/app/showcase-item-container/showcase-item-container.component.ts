import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { IShowcaseItem } from '../IShowcaseItem';
import { ShowcaseItemService } from '../showcase-item-service';

@Component({
  selector: 'showcase-item-container',
  templateUrl: './showcase-item-container.component.html',
  styleUrls: ['./showcase-item-container.component.css'],
})
export class ShowcaseItemContainerComponent implements OnInit {
  showcaseItems: IShowcaseItem[];

  constructor(private showcaseItemService: ShowcaseItemService) {}

  ngOnInit(): void {
    this.refreshItems();
  }

  onShowcaseItemHide(showcaseItem: IShowcaseItem) {
    this.showcaseItemService.delete(showcaseItem);
  }

  onShowcaseItemFilter(tag: string) {
    this.refreshItems();

    this.showcaseItems = this.showcaseItems.filter((item) =>
      item.Tags.includes(tag)
    );
  }

  refreshItems() {
    this.showcaseItems = this.showcaseItemService.get();
  }
}
