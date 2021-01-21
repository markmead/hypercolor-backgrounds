import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() colors!: string;
  @Input() sizeClass!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void { }
}
