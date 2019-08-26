import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenClassManagemenTableComponent } from './admin-open-class-managemen-table.component';

describe('AdminOpenClassManagemenTableComponent', () => {
  let component: AdminOpenClassManagemenTableComponent;
  let fixture: ComponentFixture<AdminOpenClassManagemenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenClassManagemenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenClassManagemenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
