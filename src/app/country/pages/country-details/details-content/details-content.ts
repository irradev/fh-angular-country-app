import { Component, computed, input } from '@angular/core';
import { CountryModel } from '../../../models/country-model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'details-content',
  imports: [DecimalPipe],
  templateUrl: './details-content.html',
})
export class DetailsContent {

  public country = input.required<CountryModel>();

  public currentYear = computed(() => new Date().getFullYear());
}
