import { Component, computed, effect, ElementRef, inject, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { SettingsViews } from '../../enums/settings-views';
import { DelaySettings } from "./views/delay-settings/delay-settings";
import { ThemeSettings } from "./views/theme-settings/theme-settings";

@Component({
  selector: 'settings-modal-config',
  imports: [DelaySettings, ThemeSettings],
  templateUrl: './modal-config.html',
})
export class ModalConfig {
  @ViewChild('modalConfig') modalConfig!: ElementRef<HTMLDialogElement>;

  private modalService = inject(ModalService);

  public selectedView = computed(() => this.modalService.view$());
  public settingsViews = SettingsViews;

  private modalListening = effect(() => {

    if (this.modalService.modal$()) {
      this.openModal();
    } else {
      this.closeModal();
    }
  });

  public openModal(): void {
    if (!this.modalConfig) return;
    this.modalConfig.nativeElement.showModal();
  }

  public closeModal(): void {
    if (!this.modalConfig) return;
    this.modalConfig.nativeElement.close();
    this.modalService.closeModal();
  }
}
