import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { CountryTableList } from '../../components/country-table-list/country-table-list';
import { DebounceTimeService } from '../../../settings/services/debounce-time-service';
import { RegionButtons } from '../../components/region-buttons/region-buttons';
import type { Region } from '../../types/region';
import { Country } from '../../services/country';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string | null): Region | null {
  if (!queryParam) return null;

  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  };

  return validRegions[queryParam] ?? null;
}

@Component({
  selector: 'country-by-region-page',
  imports: [CountryTableList, RegionButtons],
  templateUrl: './by-region-page.html',
})
export default class ByRegionPage {

  private router = inject(Router);
  private countryService = inject(Country);
  private activatedRoute = inject(ActivatedRoute);

  private queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') || null;
  public region = linkedSignal<Region | null>(() => validateQueryParam(this.queryParam));

  public countryResource = rxResource({
    params: () => ({ region: this.region() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: { region: params.region },
      });

      return this.countryService.searchByRegion(params.region);
    }
  });
}
