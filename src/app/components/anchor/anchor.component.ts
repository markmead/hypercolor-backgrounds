import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss'],
})
export class AnchorComponent {
  @Input() colors!: string;
  @Input() size!: string;
  @Input() title!: string;

  constructor() {}
}
