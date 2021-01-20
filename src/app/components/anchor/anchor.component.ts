import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() className!: string;
  @Input() title!: string;
  @Input() first = false;
  @Input() last = false;

  @Output() isLoaded = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(this.first) {
      this.isLoaded.emit(true)
    }
  }
}
