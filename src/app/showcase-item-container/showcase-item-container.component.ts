import { Component, OnInit } from '@angular/core';
import { IShowcaseItem } from '../IShowcaseItem';

@Component({
  selector: 'showcase-item-container',
  templateUrl: './showcase-item-container.component.html',
  styleUrls: ['./showcase-item-container.component.css']
})

export class ShowcaseItemContainerComponent implements OnInit {

  showcaseitems: IShowcaseItem[] = [
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3'
    },
    {
      name: 'Item 4',
    },
    {
      name: 'Item 5',
    },
    {
      name: 'Item 6'
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
