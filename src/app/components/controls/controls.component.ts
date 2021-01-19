import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @ViewChild('controlWrapper') controlWrapper!: ElementRef;

  @Input() className!: string;
  @Input() title!: string;
  @Input() gradientDirection!: string;
  @Input() backgroundTarget!: HTMLElement;
  @Input() first!: boolean;

  @Output() gradientDirectionChange = new EventEmitter<string>();

  directionOptions: Direction[];
  showControls = false;
  imageType = 'jpeg';
  typeOptions: string[] = ['jpeg', 'png', 'svg'];

  constructor(private directionsService: DirectionsService) {
    this.directionOptions = this.directionsService.getDirections();
  }

  ngOnInit(): void {
    if (this.first) {
      this.showControls = true;
    }

    document.addEventListener('scroll', () => {
      this.autoToggleControls();
    });
  }

  public directionChange(): void {
    this.gradientDirectionChange.emit(this.gradientDirection);
  }

  public saveBackground(): void {
    if (this.imageType === 'jpeg') {
      this.asJPEG();
    } else if (this.imageType === 'png') {
      this.asPNG();
    } else if (this.imageType === 'svg') {
      this.asSVG();
    }
  }

  public toggleControls(): void {
    this.showControls = !this.showControls;
  }

  public toggleRadioButton(inputTarget: HTMLInputElement, event: Event): void {
    event?.preventDefault();
    inputTarget.click();
  }

  private asJPEG(): void {
    htmlToImage.toJpeg(this.backgroundTarget, { pixelRatio: 1 })
      .then((dataUrl: string) => {
        this.downloadImage(this.title, dataUrl, 'jpeg');
      });
  }

    private asPNG(): void {
    htmlToImage.toPng(this.backgroundTarget, { pixelRatio: 1 })
      .then((dataUrl: string) => {
        this.downloadImage(this.title, dataUrl, 'png');
      });
  }

  private asSVG(): void {
    htmlToImage.toSvg(this.backgroundTarget)
      .then((dataUrl: string) => {
        this.downloadImage(this.title, dataUrl, 'svg');
      });
  }

  private downloadImage(title: string, data: string, type: string): void {
    const fakeLink = document.createElement('a');

    fakeLink.download = `${title}.${type}`;
    fakeLink.href = data;
    fakeLink.click();
  }

  private autoToggleControls(): void {
    // TODO: animate the show/hide

    if (this.controlWrapper && window.innerWidth >= 768) {
      const controlWrapperSize = this.controlWrapper.nativeElement.getBoundingClientRect();

      if (controlWrapperSize.top >= 0 && controlWrapperSize.bottom * 2 <= (window.innerHeight || document.documentElement.clientHeight)) {
        if (!this.showControls) {
          this.showControls = true;
        }
      }
    }
  }
}
