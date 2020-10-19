import { Component, OnInit } from '@angular/core';
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
    this.showcaseItems = this.showcaseItemService.get();
  }

  onShowcaseItemHide(showcaseItem: IShowcaseItem) {
    this.showcaseItemService.delete(showcaseItem);
  }
}
