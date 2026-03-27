import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DebounceTimeService {
    private debounceTime = signal<number>(500);

    public getDebounceTime(): number {
        return this.debounceTime();
    }

    public setDebounceTime(debounceTime: number): void {
        this.debounceTime.set(debounceTime);
    }
}