import { Component, OnInit } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';

@Component({
  selector: 'app-showcase-item-source',
  templateUrl: './showcase-item-source.component.html',
  styleUrls: ['./showcase-item-source.component.css']
})
export class ShowcaseItemSourceComponent implements OnInit {

  showcaseitems: IShowcaseItem[] = [
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  onShowcaseItemHide(showcaseItem: IShowcaseItem)
  {
    console.log("Hide: "+ showcaseItem.name);
  }
}
