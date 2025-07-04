import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@astro-nft/dashboard').then((m) => m.Dashboard),
  },

  {
    path: 'explore',
    loadComponent: () =>
      import('@astro-nft/explore').then((m) => m.Explore),
  },


   {
    path: 'nft/create',
    loadComponent: () =>
      import('@astro-nft/nft').then((m) => m.CreateNft),
  },

];
