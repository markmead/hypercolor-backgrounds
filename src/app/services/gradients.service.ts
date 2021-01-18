import { Injectable } from '@angular/core';
import { Gradient } from '../models/gradient';
import { gradients } from '../../assets/data/gradients';

@Injectable({
  providedIn: 'root'
})
export class GradientsService {
  getGradients(): Gradient[] {
    return gradients;
  }
}
