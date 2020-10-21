import { Injectable } from '@angular/core';
import { IShowcaseItem } from './IShowcaseItem';
import { Technology } from './Technology';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseItemService {
  showcaseitems: IShowcaseItem[] = [
    {
      Id: 0,
      Name: 'Lekker Skou',
      SubTitle: 'See all the "lekker" projects!',
      Description: `A "lekker" web application showcase to have a handy landing page for all other projects`,
      Image:
        'https://images.unsplash.com/photo-1596778402284-8398c7b09521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Skou',
      Readme: 'https://raw.githubusercontent.com/lekker-dev/Lekker.Skou/develop/README.md',
      DemoUrl: 'https://lkkr.azurewebsites.net/',
      Tags: [Technology.ANG],
    },
    {
      Id: 1,
      Name: 'Lekker Kort',
      SubTitle: 'Shorten or make a URL "lekker"!',
      Description: `Tired of drab, informative URLs? Why not inject some 'lekker' flavour into your links with this URL modifier`,
      Image:
        'https://lekkerkort.azurewebsites.net/hu-chen-60XLoOgwkfA-unsplash.0c26fed9ae688c2213ed.jpg',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      Readme: 'https://raw.githubusercontent.com/lekker-dev/Lekker.Kort/develop/README.md',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
      Tags: [Technology.ASPNETCORE, Technology.ANG, Technology.NETCORE],
    },
    {
      Id: 2,
      Name: 'Lekker Luister',
      SubTitle: 'Discover new "lekker" music!',
      Description: `A "lekker" web application to get some music information from music streaming services such as Deezer and Spotify`,
      Image:
        'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Luister',
      Readme: 'https://raw.githubusercontent.com/lekker-dev/Lekker.Luister/develop/README.md',
      DemoUrl: '',
      Tags: [Technology.ASPNETCORE, Technology.ANG, Technology.NETCORE],
    },
  ];

  getAll(): IShowcaseItem[] {
    return this.showcaseitems;
  }

  getItem(id: number): IShowcaseItem {
    return this.showcaseitems.find((s) => s.Id == id);
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

  getTags(): Technology[] {
    // make a set to get an unique array of iets
    return [...new Set(this.showcaseitems.flatMap((s) => s.Tags))];
  }
}
