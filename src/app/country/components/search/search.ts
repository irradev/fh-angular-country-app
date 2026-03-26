import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './search.html',
})
export class Search {

  public placeholder = input<string>('Buscar');
  public searchedValue = output<string>();
  public beforeOnSearchEmit(value: string) {
    const normalizedValue = value.trim().toLowerCase();
    if (normalizedValue.length === 0) return;

    this.searchedValue.emit(normalizedValue);
  }
}
