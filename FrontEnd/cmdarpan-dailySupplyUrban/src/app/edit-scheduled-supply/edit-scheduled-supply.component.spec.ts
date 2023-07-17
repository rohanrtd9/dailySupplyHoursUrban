import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduledSupplyComponent } from './edit-scheduled-supply.component';

describe('EditScheduledSupplyComponent', () => {
  let component: EditScheduledSupplyComponent;
  let fixture: ComponentFixture<EditScheduledSupplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditScheduledSupplyComponent]
    });
    fixture = TestBed.createComponent(EditScheduledSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
