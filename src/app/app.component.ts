import { Component, OnInit } from '@angular/core';
import { Gradient } from './models/gradient';
import { GradientsService } from './services/gradients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  gradients!: Gradient[];

  constructor(private gradientsService: GradientsService) {}

  ngOnInit() {
    this.gradientsService.getGradients().subscribe((response: any) => this.gradients = response.gradients);
  }
}
