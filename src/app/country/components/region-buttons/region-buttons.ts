import { Component, input, linkedSignal, output, signal } from '@angular/core';
import type { Region } from '../../types/region';

@Component({
  selector: 'country-region-buttons',
  imports: [],
  templateUrl: './region-buttons.html',
})
export class RegionButtons {

  public initialValue = input<Region | null>(null);
  public selectedRegion = output<Region>();
  public activeRegion = linkedSignal<Region | null>(() => this.initialValue());

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  public selectRegion(region: Region) {
    this.activeRegion.set(region);
    this.selectedRegion.emit(region);
  }

}
