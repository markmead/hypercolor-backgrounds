import { Component } from '@angular/core';
import { Gradient } from './models/gradient';
import { GradientsService } from './services/gradients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allGradients!: Gradient[];

  constructor(private gradientsService: GradientsService) {
    this.gradientsService.getGradients().subscribe((res: any) => this.allGradients = res.gradients);
  }
}
