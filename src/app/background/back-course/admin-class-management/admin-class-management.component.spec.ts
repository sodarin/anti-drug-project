import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassManagementComponent } from './admin-class-management.component';

describe('AdminClassManagementComponent', () => {
  let component: AdminClassManagementComponent;
  let fixture: ComponentFixture<AdminClassManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
