import { Component } from '@angular/core';
import { Gradient } from './models/gradient';
import { GradientsService } from './services/gradients.service';

import NegativeHover from 'negative-hover'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  className = 'bg-gradient-to-r from-rose-50 to-cyan-50';
  allGradients!: Gradient[];

  constructor(private gradientsService: GradientsService) {
    this.allGradients = this.gradientsService.getGradients();
  }

  ngAfterViewInit() {
    const negativeHover = new NegativeHover('#negativeHoverTarget', {
      target: '.gradient-anchor',
      css: 'scale-90'
    })

    console.log(document.querySelectorAll('.gradient-anchor'))

    negativeHover.init();
  }
}
