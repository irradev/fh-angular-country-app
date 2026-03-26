import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { CountryRestResponse } from '../api/country-rest-response';
import { map, catchError, throwError, delay } from 'rxjs';
import { CountryRestMapper } from '../api/country-rest-mapper';

const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root'
})
export class Country {

  private http = inject(HttpClient);


  private normalizeQuery(query: string): string {
    return query.trim().toLowerCase();
  }

  searchByCapital(query: string) {
    const normalizedQuery = this.normalizeQuery(query);
    return this.http.get<CountryRestResponse[]>(`${API_URL}/capital/${normalizedQuery}`).pipe(
      map(CountryRestMapper.toModelList),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar información con esta búsqueda: ${query}`));
      })
    )
  }

  searchByCountry(query: string) {
    const normalizedQuery = this.normalizeQuery(query);
    return this.http.get<CountryRestResponse[]>(`${API_URL}/name/${normalizedQuery}`).pipe(
      map(CountryRestMapper.toModelList),
      delay(2000),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar información con esta búsqueda: ${query}`));
      })
    )
  }

  searchByAlphaCode(code: string) {
    const normalizedQuery = this.normalizeQuery(code);
    return this.http.get<CountryRestResponse[]>(`${API_URL}/alpha/${normalizedQuery}`).pipe(
      map(CountryRestMapper.toModelList),
      map((countries) => countries.at(0) ?? null),
      delay(2000),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar un país con este código: ${code}`));
      })
    )
  }

}
