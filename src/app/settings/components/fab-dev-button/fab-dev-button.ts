import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { ModalConfig } from "../modal-config/modal-config";
import { SettingsViews } from '../../enums/settings-views';

@Component({
  selector: 'settings-fab-dev-button',
  imports: [ModalConfig],
  templateUrl: './fab-dev-button.html',
})
export class FabDevButton {

  private modalService = inject(ModalService);

  public settingsViews = SettingsViews;

  public openModal(view: SettingsViews): void {
    this.modalService.openModal(view);
  }


}
