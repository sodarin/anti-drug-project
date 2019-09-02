import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatingManagementTabComponent } from './admin-rating-management-tab.component';

describe('AdminRatingManagementTabComponent', () => {
  let component: AdminRatingManagementTabComponent;
  let fixture: ComponentFixture<AdminRatingManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRatingManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatingManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
