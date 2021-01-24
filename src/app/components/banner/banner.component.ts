import { Component, Input } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent {
  @Input() gradients!: Gradient[];

  constructor() {}
}
