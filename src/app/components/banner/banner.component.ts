import { Component, Input, OnInit } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() allGradients!: Gradient[];

  isLoaded = false;

  constructor() { }

  ngOnInit(): void { }
}
