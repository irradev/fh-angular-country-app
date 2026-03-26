import { Component, output } from '@angular/core';
import { IconTheme } from "../../../icons/icon-theme";
import { ModalActions } from "../../components/modal-actions/modal-actions";

@Component({
  selector: 'view-theme-settings',
  imports: [IconTheme, ModalActions],
  templateUrl: './theme-settings.html',
})
export class ThemeSettings {
  public acceptTheme = output<void>();
  public cancelTheme = output<void>();

  public accept(): void {
    this.acceptTheme.emit();
  }

  public cancel(): void {
    this.cancelTheme.emit();
  }
}
