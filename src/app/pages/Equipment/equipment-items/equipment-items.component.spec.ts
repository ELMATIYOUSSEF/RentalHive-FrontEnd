import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemsComponent } from './equipment-items.component';

describe('EquipmentItemsComponent', () => {
  let component: EquipmentItemsComponent;
  let fixture: ComponentFixture<EquipmentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
