import type { CountryRestResponse } from "./country-rest-response";
import type { CountryModel } from "../models/country-model";

export class CountryRestMapper {

    static toModel(country: CountryRestResponse): CountryModel {
        return {
            cca2: country.cca2,
            flag: country.flag,
            flagSvg: country.flags.svg,
            name: country.translations['spa'].official || country.name.common,
            capital: country.capital?.join(', ') || 'No tiene capital',
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            borders: country.borders,
        };
    }

    static toModelList(countries: CountryRestResponse[]): CountryModel[] {
        return countries.map(CountryRestMapper.toModel);
    }
}