import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeResponseComponent } from './age-response.component';

describe('AgeResponseComponent', () => {
  let component: AgeResponseComponent;
  let fixture: ComponentFixture<AgeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
