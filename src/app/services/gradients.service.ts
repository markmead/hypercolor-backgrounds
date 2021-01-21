import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gradient } from '../models/gradient';

@Injectable({
  providedIn: 'root',
})
export class GradientsService {
  constructor(private http: HttpClient) {}

  getGradients(): Observable<object> {
    return this.http.get<Gradient>('https://hypercolor.dev/gradients.json');
  }
}
