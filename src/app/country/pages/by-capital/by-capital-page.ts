import { Component, computed, inject, resource, signal } from '@angular/core';
import { Country } from '../../services/country';
import { Search } from '../../components/search/search';
import { CountryTableList } from '../../components/country-table-list/country-table-list';
import type { CountryModel } from '../../models/country-model';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { DebounceTimeService } from '../../../settings/services/debounce-time-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-by-capital-page',
  imports: [Search, CountryTableList],
  templateUrl: './by-capital-page.html',
})
export default class ByCapitalPage {

  private router = inject(Router);
  private countryService = inject(Country);
  private debounceTimeService = inject(DebounceTimeService);
  private activatedRoute = inject(ActivatedRoute);
  private queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  public query = signal<string>(this.queryParam);
  public debounceTime = computed(() => this.debounceTimeService.getDebounceTime());

  // Resource con observables
  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      this.router.navigate(['/country/by-capital'], {
        queryParams: { query: params.query },
      });

      return this.countryService.searchByCapital(params.query);
    }
  });

  // Resource con promesas
  // public countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];
  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     );
  //   }

  // });
  // public isLoading = signal<boolean>(false);
  // public isError = signal<string | null>(null);
  // public countries = signal<CountryModel[]>([]);


  // public onSearch(value: string) {

  //   if (this.isLoading()) return;
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(value).subscribe({
  //     next: (response) => {
  //       this.countries.set(response);
  //     },
  //     error: (error) => {
  //       this.isError.set(error.message);
  //       this.countries.set([]);
  //       this.isLoading.set(false);
  //     },
  //     complete: () => {
  //       this.isLoading.set(false);
  //     }
  //   });
  // }
}
