import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenClassManagementComponent } from './admin-open-class-management.component';

describe('AdminOpenClassManagementComponent', () => {
  let component: AdminOpenClassManagementComponent;
  let fixture: ComponentFixture<AdminOpenClassManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenClassManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
