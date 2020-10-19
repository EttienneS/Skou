import { Component, OnInit } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';
import { Technology } from '../Technology';
import { ShowcaseItemService } from '../showcase-item-service';

@Component({
  selector: 'showcase-item-container',
  templateUrl: './showcase-item-container.component.html',
  styleUrls: ['./showcase-item-container.component.css'],
})
export class ShowcaseItemContainerComponent implements OnInit {
  showcaseItems: IShowcaseItem[];
  showcaseTags: Technology[];

  constructor(private showcaseItemService: ShowcaseItemService) {}

  ngOnInit(): void {
    this.refreshItems();
  }

  onShowcaseItemHide(showcaseItem: IShowcaseItem) {
    this.showcaseItemService.delete(showcaseItem);
  }

  onShowcaseItemFilter(tag: Technology) {
    this.refreshItems();

    this.showcaseItems = this.showcaseItems.filter((item) =>
      item.Tags.includes(tag)
    );
  }

  refreshItems() {
    this.showcaseItems = this.showcaseItemService.get();
    this.showcaseTags = this.showcaseItemService.getTags();
  }
}
