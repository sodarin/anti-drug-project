import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryManagementTabComponent } from './admin-category-management-tab.component';

describe('AdminCategoryManagementTabComponent', () => {
  let component: AdminCategoryManagementTabComponent;
  let fixture: ComponentFixture<AdminCategoryManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
