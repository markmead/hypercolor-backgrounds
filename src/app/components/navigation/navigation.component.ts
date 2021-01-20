import { Component, Input, OnInit } from '@angular/core';
import { Gradient } from 'src/app/models/gradient';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() allGradients!: Gradient[];

  showNavigation = false;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      this.autoToggleNavigation();
    });
   }

  private autoToggleNavigation(): void {
    if (window.scrollY >= 240) {
      if (!this.showNavigation) {
        this.showNavigation = true;
      }
    } else {
      if (this.showNavigation) {
        this.showNavigation = false;
      }
    }
  }
}
