import { Component, Input } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-banner-anchors',
  templateUrl: './anchors.component.html',
  styleUrls: ['./anchors.component.scss'],
})
export class BannerAnchorsComponent {
  @Input() gradients!: Gradient[];

  constructor() {}
}
