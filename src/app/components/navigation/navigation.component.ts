import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
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
})
export class NavigationComponent implements OnInit {
  @Input() gradients!: Gradient[];

  showNavigation = false;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('scroll', () => this.handleToggle());
  }

  private handleToggle(): void {
    this.showNavigation = window.scrollY >= 240 ? true : false;
  }
}
