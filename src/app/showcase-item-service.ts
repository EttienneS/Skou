import { Injectable } from '@angular/core'
import { IShowcaseItem } from './IShowcaseItem';

@Injectable({
    providedIn: 'root'
})
export class ShowcaseItemService
{
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
    
    get()
    {
        return this.showcaseitems;
    }
    
    add(showcaseItem: IShowcaseItem)
    {
        this.showcaseitems.push(showcaseItem);
    }
    
    delete(showcaseItem: IShowcaseItem)
    {
        const index = this.showcaseitems.indexOf(showcaseItem);
        if (index >= 0)
        {
            this.showcaseitems.splice(index,1);
        }
    }
}