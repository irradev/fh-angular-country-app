import { Routes } from "@angular/router";
import { CountryLayout } from "../layouts/country-layout/country-layout";
import ByCapitalPage from "../pages/by-capital/by-capital-page";
import ByCountryPage from "../pages/by-country/by-country-page";
import ByRegionPage from "../pages/by-region/by-region-page";

export default [
    {
        path: '',
        component: CountryLayout,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPage
            },
            {
                path: 'by-country',
                loadComponent: () => import('../pages/by-country/by-country-page')
            },
            {
                path: 'by-region',
                loadComponent: () => import('../pages/by-region/by-region-page')
            },
            {
                path: 'by/:code',
                loadComponent: () => import('../pages/country-details/country-details')
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    }

] as Routes;