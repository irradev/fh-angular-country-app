import { Component, computed, input } from '@angular/core';
import { CountryModel } from '../../../models/country-model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-content',
  imports: [DecimalPipe],
  templateUrl: './country-content.html',
})
export class CountryContent {

  public country = input.required<CountryModel>();

  public currentYear = computed(() => new Date().getFullYear());
}
