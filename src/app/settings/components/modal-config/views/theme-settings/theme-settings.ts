import { Component, output } from '@angular/core';

@Component({
  selector: 'view-theme-settings',
  imports: [],
  templateUrl: './theme-settings.html',
})
export class ThemeSettings {
  public acceptTheme = output<void>();
  public cancelTheme = output<void>();

  public onAccept(): void {
    this.acceptTheme.emit();
  }

  public onCancel(): void {
    this.cancelTheme.emit();
  }
}
