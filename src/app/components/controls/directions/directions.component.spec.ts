import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsDirectionsComponent } from './directions.component';

describe('ControlsDirectionsComponent', () => {
  let component: ControlsDirectionsComponent;
  let fixture: ComponentFixture<ControlsDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsDirectionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
