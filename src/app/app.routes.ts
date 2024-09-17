import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/admin/layout/admin-layout/admin-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/pages/summary/summary.component'),
      },

      {
        path: 'projects',
        loadComponent: () =>
          import('./modules/pages/projects/projects.component'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
