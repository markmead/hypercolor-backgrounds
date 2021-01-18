import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
