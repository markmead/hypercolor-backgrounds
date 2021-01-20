import { Component } from '@angular/core';
import { Gradient } from './models/gradient';
import { GradientsService } from './services/gradients.service';

import NegativeHover from 'negative-hover';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allGradients!: Gradient[];

  constructor(private gradientsService: GradientsService) {
    this.gradientsService.getGradients().subscribe((res: any) => this.allGradients = res.gradients)
  }

  ngAfterViewInit(): void {
    const negativeHover = new NegativeHover('#negativeHoverTarget', {
      target: 'a',
      css: 'scale-90'
    });

    negativeHover.init();
  }
}
