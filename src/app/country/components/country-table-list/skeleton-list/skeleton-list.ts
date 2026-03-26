import { Component } from '@angular/core';

@Component({
  selector: 'skeleton-list',
  imports: [],
  templateUrl: './skeleton-list.html',
})
export class SkeletonList {

  public items = Array(5).fill(0);
}
