import { Injectable } from '@angular/core';
import { IShowcaseItem } from './IShowcaseItem';

@Injectable({
  providedIn: 'root',
})
export class ShowcaseItemService {
  showcaseitems: IShowcaseItem[] = [
    {
      Name: 'Lekker Skou',
      SubTitle: 'Kom kyk wat ons maak!',
      Liked: false,
      Description: `A "Lekker" web application showcase to have a handy landing page for all other projects.`,
      Image:
        'https://images.unsplash.com/photo-1596778402284-8398c7b09521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Skou',
      DemoUrl: '',
    },
    {
      Name: 'Lekker Kort',
      SubTitle: 'Maak hom lekker kort!',
      Liked: false,
      Description: `Tired of drab, informative URLs? Why not inject some 'lekker' flavour into your links with Lekker.Kort!
      
      Using our patented[1] lekkerification algorithm[2] you too can give have lekker URL!

      [1] not even slightly patented [2] very simple number-text lookup`,
      Image:
        'https://lekkerkort.azurewebsites.net/hu-chen-60XLoOgwkfA-unsplash.0c26fed9ae688c2213ed.jpg',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
    {
      Name: 'Lekker Luister',
      SubTitle: 'Luister na iets lekker!',
      Liked: false,
      Description: `A "Lekker" web application to get some music information from music streaming services such as Deezer, Spotify etc. through their open API's and implementing it with Angular and .net Core.`,
      Image:
        'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ProjectUrl: '',
      DemoUrl: '',
    },
    {
      Name: 'Item 1',
      SubTitle: 'Test item!',
      Liked: false,
      Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      Image: '../../assets/logo.png',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
    {
      Name: 'Item 1',
      SubTitle: 'Test item!',
      Liked: false,
      Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      Image: '../../assets/logo.png',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
    {
      Name: 'Item 1',
      SubTitle: 'Test item!',
      Liked: false,
      Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      Image: '../../assets/logo.png',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
    {
      Name: 'Item 1',
      SubTitle: 'Test item!',
      Liked: false,
      Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      Image: '../../assets/logo.png',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
    {
      Name: 'Item 1',
      SubTitle: 'Test item!',
      Liked: false,
      Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
      Image: '../../assets/logo.png',
      ProjectUrl: 'https://github.com/lekker-dev/Lekker.Kort',
      DemoUrl: 'https://lekkerkort.azurewebsites.net/',
    },
  ];

  get() {
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

  update(showcaseItem: IShowcaseItem) {
    // todo: actually implement this
    // const index = this.showcaseitems.indexOf(showcaseItem);
    // this.showcaseitems[index] = showcaseItem;
  }
}
