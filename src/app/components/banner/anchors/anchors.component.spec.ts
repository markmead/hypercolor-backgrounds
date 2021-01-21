import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAnchorsComponent } from './anchors.component';

describe('BannerComponent', () => {
  let component: BannerAnchorsComponent;
  let fixture: ComponentFixture<BannerAnchorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerAnchorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAnchorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
