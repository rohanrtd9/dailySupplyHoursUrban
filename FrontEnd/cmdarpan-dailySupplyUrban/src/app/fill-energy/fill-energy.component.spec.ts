import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillEnergyComponent } from './fill-energy.component';

describe('FillEnergyComponent', () => {
  let component: FillEnergyComponent;
  let fixture: ComponentFixture<FillEnergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillEnergyComponent]
    });
    fixture = TestBed.createComponent(FillEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
