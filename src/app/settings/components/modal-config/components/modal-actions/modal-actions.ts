import { Component, output } from '@angular/core';

@Component({
  selector: 'modal-actions',
  imports: [],
  templateUrl: './modal-actions.html',
})
export class ModalActions {
  public accept = output<void>();
  public cancel = output<void>();
}
