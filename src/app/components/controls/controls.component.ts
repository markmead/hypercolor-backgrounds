import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Direction } from 'src/app/models/direction';

import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Input() direction!: string;
  @Input() directions!: Direction[];
  @Input() gradient!: HTMLElement;
  @Input() title!: string;

  @Output() directionChange = new EventEmitter<string>();

  selectedDirection!: string;
  showControls = false;
  type = 'jpeg';
  types: string[] = ['jpeg', 'png', 'svg'];

  constructor() {}

  ngOnInit(): void {
    this.selectedDirection = this.direction;
  }

  public handleToggle(): void {
    this.showControls = !this.showControls;
  }

  public handleDirection(value: string): void {
    this.directionChange.emit(value);
  }

  public handleType(value: string): void {
    this.type = value;
  }

  public handleSave(): void {
    if (this.type === 'jpeg') {
      this.saveAsJPEG();
    } else if (this.type === 'png') {
      this.saveAsPNG();
    } else if (this.type === 'svg') {
      this.saveAsSVG();
    }
  }

  private saveAsJPEG(): void {
    htmlToImage
      .toJpeg(this.gradient, { pixelRatio: 1 })
      .then((dataUrl: string) => {
        this.handleDownload(this.title, dataUrl, 'jpeg');
      });
  }

  private saveAsPNG(): void {
    htmlToImage
      .toPng(this.gradient, { pixelRatio: 1 })
      .then((dataUrl: string) => {
        this.handleDownload(this.title, dataUrl, 'png');
      });
  }

  private saveAsSVG(): void {
    htmlToImage.toSvg(this.gradient).then((dataUrl: string) => {
      this.handleDownload(this.title, dataUrl, 'svg');
    });
  }

  private handleDownload(title: string, data: string, type: string): void {
    const fakeLink = document.createElement('a');

    fakeLink.download = `${title}.${type}`;
    fakeLink.href = data;
    fakeLink.click();
  }
}
