import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@astro-nft/dashboard').then((m) => m.Dashboard),
  },
];
