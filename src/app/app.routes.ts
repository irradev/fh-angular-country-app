import { Routes } from '@angular/router';
import { HomePage } from './shared/pages/home/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },

    {
        path: 'country',
        loadChildren: () => import('./country/router/country.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
