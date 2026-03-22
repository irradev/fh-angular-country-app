import { Routes } from "@angular/router";
import { CountryLayout } from "../layouts/country-layout/country-layout";
import ByCapitalPage from "../pages/by-capital/by-capital-page";

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
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    }

] as Routes;