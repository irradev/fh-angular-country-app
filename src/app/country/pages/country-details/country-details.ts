import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../services/country';
import { NotFound } from '../../../shared/components/not-found/not-found';
import { DetailsContent } from './details-content/details-content';
import { DetailsSkeleton } from './details-skeleton/details-skeleton';

@Component({
  selector: 'country-details',
  imports: [NotFound, DetailsContent, DetailsSkeleton],
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
