import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() className!: string;
  @Input() title!: string;
  @Input() gradientDirection!: string;
  @Input() backgroundTarget!: HTMLElement;

  @Output() gradientDirectionChange = new EventEmitter<string>();

  directionOptions: Direction[];
  showControls = true;

  constructor(private directionsService: DirectionsService) {
    this.directionOptions = this.directionsService.getDirections();
  }

  ngOnInit(): void {
  }

  public directionChange(): void {
    this.gradientDirectionChange.emit(this.gradientDirection);
  }

  public saveBackground(): void {
    htmlToImage.toJpeg(this.backgroundTarget, { pixelRatio: 1 })
      .then((dataUrl: string) => {
        const fakeLink = document.createElement('a');

        fakeLink.download = `${this.title}.jpeg`;
        fakeLink.href = dataUrl;
        fakeLink.click();
      })
      .catch((error) => console.error('oops, something went wrong!', error));
  }

  public toggleControls(): void {
    this.showControls = !this.showControls;
  }

  public toggleRadioButton(inputTarget: HTMLInputElement, event: Event): void {
    event?.preventDefault();
    inputTarget.click();
  }
}