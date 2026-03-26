import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'shared-not-found',
  imports: [],
  templateUrl: './not-found.html',
})
export class NotFound {

  public location = inject(Location)
  public errorMessage = input<string | null>(null);


  public goBack() {
    this.location.back();
  }

}
