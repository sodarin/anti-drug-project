import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassCategoryManagementComponent } from './admin-class-category-management.component';

describe('AdminClassCategoryManagementComponent', () => {
  let component: AdminClassCategoryManagementComponent;
  let fixture: ComponentFixture<AdminClassCategoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassCategoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassCategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
