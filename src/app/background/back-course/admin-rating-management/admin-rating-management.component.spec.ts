import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatingManagementComponent } from './admin-rating-management.component';

describe('AdminRatingManagementComponent', () => {
  let component: AdminRatingManagementComponent;
  let fixture: ComponentFixture<AdminRatingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRatingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
