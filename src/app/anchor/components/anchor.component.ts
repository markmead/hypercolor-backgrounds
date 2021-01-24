import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  template: `
    <a
      href="#{{ title }}"
      class="relative flex-shrink-0 block m-1 transition-all duration-300 transform rounded-lg focus:outline-none focus:ring hover:shadow-xl hover:z-10"
      [ngClass]="[colors, size]"
      [title]="title"
    >
    </a>
  `
})
export class AnchorComponent {
  @Input() colors!: string;
  @Input() size!: string;
  @Input() title!: string;
}
