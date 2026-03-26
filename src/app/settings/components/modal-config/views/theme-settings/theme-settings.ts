import { Component, inject, output, signal } from '@angular/core';
import { IconTheme } from "../../../icons/icon-theme";
import { ModalActions } from "../../components/modal-actions/modal-actions";
import { Themes } from '../../../../enums/themes';
import { ThemeService } from '../../../../services/theme-service';

@Component({
  selector: 'view-theme-settings',
  imports: [IconTheme, ModalActions],
  templateUrl: './theme-settings.html',
})
export class ThemeSettings {

  public themeService = inject(ThemeService);

  public acceptTheme = output<void>();
  public cancelTheme = output<void>();

  public temporalTheme = signal<string>(this.themeService.getTheme());
  public themes: string[] = Object.values(Themes);

  public accept(): void {
    this.acceptTheme.emit();
    this.themeService.setTheme(this.temporalTheme());
    this.themeService.applyTheme(this.temporalTheme());
  }

  public cancel(): void {
    this.cancelTheme.emit();
    this.themeService.applyTheme(this.themeService.getTheme());
  }

  public toggleTheme(selectedTheme: string): void {
    this.temporalTheme.set(selectedTheme);
    this.themeService.applyTheme(selectedTheme);
  }

}
