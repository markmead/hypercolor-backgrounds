import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Gradient } from 'src/app/models/gradient';
import { GradientsService } from 'src/app/services/gradients.service';

@Component({
  selector: 'app-navigation',
    animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          transform: 'translateY(100px)',
          opacity: 0,
        })
      ),
      transition('show <=> hide', [animate('0.25s ease-in')]),
    ]),
  ],
  template: `
    <section
      class="fixed inset-x-0 z-50 px-2 mx-4 bg-white bg-opacity-40 dark:bg-gray-900 bottom-4 rounded-2xl bg-blurred"
      [@showHide]="show ? 'show' : 'hide'"
    >
      <div class="flex items-center h-16 overflow-x-auto hide-scrollbar">
        <app-anchor
          *ngFor="let gradient of gradients"
          [colors]="gradient.colors"
          [size]="'w-10 h-10 hover:scale-125'"
          [title]="gradient.title"
        >
        </app-anchor>
      </div>
    </section>
  `
})

export class NavigationComponent implements OnInit {
  gradients!: Gradient[];
  show: boolean = false;

  constructor(private gradientsService: GradientsService) {}

  ngOnInit() {
    this.gradientsService.getGradients().subscribe((response: any) =>  {
      this.gradients = response.gradients
    });

    document.addEventListener('scroll', () => this.toggleShow());
  }

  private toggleShow(): void {
    this.show = window.scrollY >= 240 ? true : false;
  }
}
