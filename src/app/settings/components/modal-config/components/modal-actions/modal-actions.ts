import { Component, input, output } from '@angular/core';

@Component({
  selector: 'modal-actions',
  imports: [],
  templateUrl: './modal-actions.html',
})
export class ModalActions {
  public isDisabledAccept = input<boolean>(false);
  public accept = output<void>();
  public cancel = output<void>();
}
