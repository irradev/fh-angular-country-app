import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './search.html',
})
export class Search {

  public placeholder = input<string>('Buscar');
  public initialValue = input<string>('');
  public debounceTime = input<number>(500);
  public searchedValue = output<string>();
  private lastValue = signal<string>('');
  private actualValue = linkedSignal<string>(() => this.initialValue() || '');

  private debounceEffect = effect((onCleanup) => {
    const value = this.actualValue();

    const timeout = setTimeout(() => {
      if (!value.trim()) return;

      this.searchedValue.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });

  public beforeOnSearchEmit(value: string) {
    const normalizedValue = value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z ]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

    if (normalizedValue.length === 0) return;
    if (this.lastValue() === normalizedValue) return;

    this.lastValue.set(normalizedValue);
    this.actualValue.set(normalizedValue);
  }
}
