import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DelayService {

    private delay = signal<number>(500);
    private isActive = signal<boolean>(true);
    public delay$ = this.delay.asReadonly();
    public isActive$ = this.isActive.asReadonly();

    public setDelay(delay: number): void {
        this.delay.set(delay);
    }

    public getDelay(): number {
        return this.delay();
    }

    public setIsActive(isActive: boolean): void {
        this.isActive.set(isActive);
    }

    public getIsActive(): boolean {
        return this.isActive();
    }

}