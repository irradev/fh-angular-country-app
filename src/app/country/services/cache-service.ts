import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CacheService<T> {

    private cache = new Map<string, T>();

    get(key: string): T | undefined {
        return this.cache.get(key);
    }

    set(key: string, value: T): void {
        this.cache.set(key, value);
    }
}