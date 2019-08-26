import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenClassManagementTabComponent } from './admin-open-class-management-tab.component';

describe('AdminOpenClassManagementTabComponent', () => {
  let component: AdminOpenClassManagementTabComponent;
  let fixture: ComponentFixture<AdminOpenClassManagementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenClassManagementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenClassManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
