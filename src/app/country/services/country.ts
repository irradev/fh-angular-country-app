import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import type { CountryRestResponse } from '../api/country-rest-response';
import { map, catchError, throwError, delay, of, tap } from 'rxjs';
import { CountryRestMapper } from '../api/country-rest-mapper';
import { DelayService } from '../../settings/services/delay-service';
import { CountryModel } from '../models/country-model';
import { CacheService } from './cache-service';
import { Region } from '../types/region';

const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root'
})
export class Country {

  private http = inject(HttpClient);
  private delayService = inject(DelayService);

  private queryCacheCapital = inject(CacheService<CountryModel[]>);
  private queryCacheCountry = inject(CacheService<CountryModel[]>);
  private queryCacheRegion = inject(CacheService<CountryModel[]>);
  private queryCacheAlphaCode = inject(CacheService<CountryModel>);

  searchByCapital(query: string) {

    if (this.queryCacheCapital.get(query)) {
      return of(this.queryCacheCapital.get(query)!); //.pipe(delay...)
    }

    return this.http.get<CountryRestResponse[]>(`${API_URL}/capital/${query}`).pipe(
      map(CountryRestMapper.toModelList),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      delay(this.delayService.getIsActive() ? this.delayService.getDelay() : 0),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar información con esta búsqueda: ${query}`));
      })
    )
  }

  searchByCountry(query: string) {

    if (this.queryCacheCountry.get(query)) {
      return of(this.queryCacheCountry.get(query)!);
    }

    return this.http.get<CountryRestResponse[]>(`${API_URL}/name/${query}`).pipe(
      map(CountryRestMapper.toModelList),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(this.delayService.getIsActive() ? this.delayService.getDelay() : 0),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar información con esta búsqueda: ${query}`));
      })
    )
  }

  searchByAlphaCode(code: string) {

    if (this.queryCacheAlphaCode.get(code)) {
      return of(this.queryCacheAlphaCode.get(code)!);
    }

    return this.http.get<CountryRestResponse[]>(`${API_URL}/alpha/${code}`).pipe(
      map(CountryRestMapper.toModelList),
      map((countries) => countries.at(0) ?? null),
      tap((country) => this.queryCacheAlphaCode.set(code, country)),
      delay(this.delayService.getIsActive() ? this.delayService.getDelay() : 0),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar un país con este código: ${code}`));
      })
    )
  }

  searchByRegion(region: Region) {

    if (this.queryCacheRegion.get(region)) {
      return of(this.queryCacheRegion.get(region)!);
    }

    return this.http.get<CountryRestResponse[]>(`${API_URL}/region/${region}`).pipe(
      map(CountryRestMapper.toModelList),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      delay(this.delayService.getIsActive() ? this.delayService.getDelay() : 0),
      catchError((error) => {
        return throwError(() => new Error(`No se pudo encontrar información con esta búsqueda: ${region}`));
      })
    )
  }

}
