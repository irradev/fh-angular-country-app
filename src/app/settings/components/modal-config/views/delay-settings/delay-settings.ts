import { Component, inject, output, signal } from '@angular/core';
import { DelayService } from '../../../../services/delay-service';

interface DelayOptions {
  isActive: boolean;
  delay: number;
}

@Component({
  selector: 'view-delay-settings',
  imports: [],
  templateUrl: './delay-settings.html',
})
export class DelaySettings {

  private delayService = inject(DelayService);

  public acceptDelay = output<void>();
  public cancelDelay = output<void>();

  public delayOptions = signal<DelayOptions>({
    isActive: this.delayService.getIsActive(),
    delay: this.delayService.getDelay(),
  });



  public toggleDelay(): void {
    this.delayOptions.update((options) => ({
      ...options,
      isActive: !options.isActive,
    }));
  }

  public setDelay(delay: number): void {
    this.delayOptions.update((options) => ({
      ...options,
      delay,
    }));
  }

  public onAccept(): void {
    this.delayService.setDelay(this.delayOptions().delay);
    this.delayService.setIsActive(this.delayOptions().isActive);
    this.acceptDelay.emit();
  }

  public onCancel(): void {
    this.cancelDelay.emit();
  }

}
