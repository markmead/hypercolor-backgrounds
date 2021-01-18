import { Injectable } from '@angular/core';
import { directions } from 'src/assets/data/directions';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor() { }

  getDirections(): any {
    return directions;
  }
}
