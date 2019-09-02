import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassRatingManagementComponent } from './admin-class-rating-management.component';

describe('AdminClassRatingManagementComponent', () => {
  let component: AdminClassRatingManagementComponent;
  let fixture: ComponentFixture<AdminClassRatingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassRatingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassRatingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
