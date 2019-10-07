import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineManagementComponent } from './mine-management.component';

describe('MineManagementComponent', () => {
  let component: MineManagementComponent;
  let fixture: ComponentFixture<MineManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
