import { Component, inject, output } from '@angular/core';
import { CacheService } from '../../../../../country/services/cache-service';
import { ModalActions } from '../../components/modal-actions/modal-actions';
import { IconCacheClean } from '../../../icons/icon-cache-clean';

@Component({
  selector: 'view-cache-clean-settings',
  imports: [IconCacheClean, ModalActions],
  templateUrl: './cache-clean-settings.html',
})
export class CacheCleanSettings {

  private cacheService = inject(CacheService);

  public acceptCacheClean = output<void>();
  public cancelCacheClean = output<void>();

  public accept(): void {
    this.cacheService.clear();
    this.acceptCacheClean.emit();
  }

  public cancel(): void {
    this.cancelCacheClean.emit();
  }


}
