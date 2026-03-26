import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CountryModel } from '../../models/country-model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-table-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-table-list.html',
})
export class CountryTableList {

  public countries = input.required<CountryModel[]>();
  public errorMessage = input<string | null>(null);
  public isLoading = input<boolean>(false);

  public hasCountries = computed(() => this.countries().length > 0);

}
