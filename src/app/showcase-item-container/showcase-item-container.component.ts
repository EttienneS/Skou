import { Component, OnInit } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';
import { Technology } from '../Technology';
import { ShowcaseItemService } from '../showcase-item-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'showcase-item-container',
  templateUrl: './showcase-item-container.component.html',
  styleUrls: ['./showcase-item-container.component.css'],
})
export class ShowcaseItemContainerComponent implements OnInit {
  showcaseItems: IShowcaseItem[];
  showcaseTags: Technology[];

  constructor(private route: ActivatedRoute,private router: Router, private showcaseItemService: ShowcaseItemService) {}

  ngOnInit(): void {
    this.refreshItems();
  }

  onShowcaseItemFocus(showcaseItem: IShowcaseItem) {
    console.log(showcaseItem.Name + ' card clicked!!');
    //this.showcaseItems = this.showcaseItems.filter((s) => s == showcaseItem);

    this.router.navigate(['/detail', { id: showcaseItem.Id }]);
  }

  onShowcaseItemFilter(tag: Technology) {
    this.refreshItems();

    this.showcaseItems = this.showcaseItems.filter((item) =>
      item.Tags.includes(tag)
    );
  }

  refreshItems() {
    this.showcaseItems = this.showcaseItemService.getAll();
    this.showcaseTags = this.showcaseItemService.getTags();
  }
}
