import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Direction } from 'src/app/models/direction';

@Component({
  selector: 'app-controls-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class ControlsDirectionsComponent {
  @Input() directions!: Direction[];
  @Input() title!: string;
  @Input() selectedDirection!: string;

  @Output() directionChange = new EventEmitter<string>();

  constructor() {}

  public handleRadioClick(inputTarget: HTMLInputElement, event: Event): void {
    event?.preventDefault();
    inputTarget.click();
  }

  // TODO: look into a better way of handling 2+ level nested data binding
  public handleDirection(value: string): void {
    this.selectedDirection = value;
    this.directionChange.emit(value);
  }
}
