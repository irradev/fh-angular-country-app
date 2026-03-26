import { DOCUMENT, inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private document = inject(DOCUMENT);
    private theme = signal<string>('retro');


    public getTheme(): string {
        return this.theme();
    }

    public setTheme(theme: string): void {
        this.theme.set(theme);
    }

    public applyTheme(theme: string): void {
        this.document.documentElement.setAttribute('data-theme', theme);
    }
}