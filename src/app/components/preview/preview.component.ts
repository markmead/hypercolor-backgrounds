import { Component, Input, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';
import { gradients } from 'src/assets/data/gradients';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() className!: string;
  @Input() title!: string;

  gradientDirection!: string;
  directionOptions: Direction[];
  gradientClass!: string;

  constructor(private directionsService: DirectionsService) {
    this.directionOptions = this.directionsService.getDirections();
  }

  ngOnInit(): void {
    this.gradientClass = this.className;
    this.gradientDirection = this.getDirection();
  }

  public setGradientDirection(value: string): void {
    if (value) {
      const classNameArray = this.className.split(' ');
      classNameArray[0] = value;

      this.gradientClass = classNameArray.join(' ');
    }
  }

  private getDirection(): string {
    let gradientDirection = '';

    if (this.className) {
      const classNameArray = this.className.split(' ');
      gradientDirection = classNameArray[0];
    }
    return gradientDirection;
  }
}
