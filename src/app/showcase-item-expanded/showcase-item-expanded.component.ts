import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IShowcaseItem } from '../IShowcaseItem';
import { ShowcaseItemService } from '../showcase-item-service';

@Component({
  selector: 'showcase-item-expanded',
  templateUrl: './showcase-item-expanded.component.html',
  styleUrls: ['./showcase-item-expanded.component.css'],
})
export class ShowcaseItemExpandedComponent implements OnInit {
  showcaseitem: IShowcaseItem;

  constructor(
    private route: ActivatedRoute,
    private showcaseService: ShowcaseItemService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.showcaseitem = this.showcaseService.getItem(id);
  }
}
