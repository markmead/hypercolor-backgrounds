import { Component, Input, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() colors!: string;
  @Input() title!: string;

  classNames!: string;
  direction!: string;
  directions: Direction[];

  constructor(private directionsService: DirectionsService) {
    this.directions = this.directionsService.getDirections();
  }

  ngOnInit(): void {
    this.direction = this.colors.split(' ')[0];
  }

  public handleDirection(value: string): void {
    if (value) {
      const colors = this.colors.split(' ');
      colors[0] = value;

      this.colors = colors.join(' ');
    }
  }
}
