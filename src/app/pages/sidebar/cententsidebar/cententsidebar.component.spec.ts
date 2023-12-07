import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CententsidebarComponent } from './cententsidebar.component';

describe('CententsidebarComponent', () => {
  let component: CententsidebarComponent;
  let fixture: ComponentFixture<CententsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CententsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CententsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
