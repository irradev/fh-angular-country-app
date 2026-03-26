import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../services/country';
import { NotFound } from '../../../shared/components/not-found/not-found';
import { CountryContent } from './country-content/country-content';

@Component({
  selector: 'country-details',
  imports: [NotFound, CountryContent],
  templateUrl: './country-details.html',
})
export default class CountryDetails {

  private countryService = inject(Country);
  private countryCode = inject(ActivatedRoute).snapshot.params['code'];

  public countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => this.countryService.searchByAlphaCode(params.code)
  });

}
