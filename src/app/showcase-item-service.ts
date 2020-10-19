import { Injectable } from '@angular/core';
import { IShowcaseItem } from './IShowcaseItem';
import { Technology } from './Technology';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseItemService {
  showcaseitems: IShowcaseItem[] = [
    {
      Name: 'Lekker Skou',
      SubTitle: 'Kom kyk wat ons maak!',
      Description: `A "Lekker" web application showcase to have a handy landing page for all other projects.`,
      Image:
        'https://images.unsplash.com/photo-1596778402284-8398c7b09521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Skou',
      DemoUrl: '',
      Tags: [Technology.ANG],
    },
    {
      Name: 'Lekker Kort',
      SubTitle: 'Maak hom lekker kort!',
      Description: `Tired of drab, informative URLs? Why not inject some 'lekker' flavour into your links with Lekker.Kort!
      
      Using our patented[1] lekkerification algorithm[2] you too can give have lekker URL!

      [1] not even slightly patented [2] very simple number-text lookup`,
      Image:
        'https://lekkerkort.azurewebsites.net/hu-chen-60XLoOgwkfA-unsplash.0c26fed9ae688c2213ed.jpg',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
      Tags: [Technology.ANG, Technology.NETCORE],
    },
    {
      Name: 'Lekker Luister',
      SubTitle: 'Luister na iets lekker!',
      Description: `A "Lekker" web application to get some music information from music streaming services such as Deezer, Spotify etc. through their open API's and implementing it with Angular and .net Core.`,
      Image:
        'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ProjectUrl: '',
      DemoUrl: '',
      Tags: [Technology.ANG, Technology.NETCORE],
    },
  ];

  get(): IShowcaseItem[] {
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

  getTags(): Technology[] {
    // make a set to get an unique array of iets
    return [...new Set(this.showcaseitems.flatMap((s) => s.Tags))];
  }
}
