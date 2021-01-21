import { Component, Input } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() gradients!: Gradient[];

  constructor() {}
}
