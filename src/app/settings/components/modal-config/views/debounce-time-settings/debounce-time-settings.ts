import { Component, effect, inject, output, signal } from '@angular/core';
import { IconInputType } from '../../../icons/icon-input-type';
import { ModalActions } from '../../components/modal-actions/modal-actions';
import { DebounceTimeService } from '../../../../services/debounce-time-service';


@Component({
  selector: 'view-debounce-time-settings',
  imports: [IconInputType, ModalActions],
  templateUrl: './debounce-time-settings.html',
})
export class DebounceTimeSettings {

  public readonly MIN_DEBOUNCE_TIME = 300;
  private debounceTimeService = inject(DebounceTimeService);
  public acceptDebounceTime = output<void>();
  public cancelDebounceTime = output<void>();

  public debounceTime = signal<number>(this.debounceTimeService.getDebounceTime());
  public isValid = signal<boolean>(true);

  private checkIsValidDebounceTime = effect(() => {
    if (this.debounceTime() < this.MIN_DEBOUNCE_TIME) {
      this.isValid.set(false);
      return;
    }
    this.isValid.set(true);
  });

  public setDebounceTime(debounceTime: number): void {
    this.debounceTime.set(debounceTime);
  }

  public accept(): void {
    if (!this.isValid()) return;
    this.debounceTimeService.setDebounceTime(this.debounceTime());
    this.acceptDebounceTime.emit();
  }

  public cancel(): void {
    this.cancelDebounceTime.emit();
  }
}
