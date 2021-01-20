import { Component, Input, OnInit } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

import NegativeHover from 'negative-hover';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() allGradients!: Gradient[];

  isLoaded = false;

  constructor() { }

  ngOnInit(): void { }

  public addHoverEffect(): void {
    const negativeHover = new NegativeHover('#negativeHoverTarget', {
      target: 'a',
      css: ['opacity-50', 'scale-95']
    });

    negativeHover.init();
  }
}
