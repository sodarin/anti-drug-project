import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInfoManagementComponent } from './class-info-management.component';

describe('ClassInfoManagementComponent', () => {
  let component: ClassInfoManagementComponent;
  let fixture: ComponentFixture<ClassInfoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassInfoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassInfoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
